import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized Gemini client
let geminiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  if (!geminiClient) {
    geminiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return geminiClient;
}

const CLINIC_KNOWLEDGE = `
You are "SmileBot", the intelligent, friendly, and empathetic patient assistance AI for EverSmile Dental clinic in Nairobi, Kenya.

Clinic Profile:
- Clinic Name: EverSmile Dental
- Tagline: "Crafting Confident, Radiant Smiles for the Entire Family"
- Location: Garden City, Business Park, Suite A103, Thika Road, Nairobi, Kenya (Easy access via Exit 7 on Thika Superhighway, ample secure parking at Garden City Mall/Business Park).
- Google Maps Link: https://maps.app.goo.gl/3rkpGTrx1DtFe33F8
- Phone & WhatsApp: +254 795 803 669
- Email: care@eversmiledental.co.ke
- Social Media Links:
  * TikTok: https://www.tiktok.com/@eversmile_dental?_r=1&_t=ZS-99bzeVtsmay
  * Instagram: https://www.instagram.com/eversmiledental_ke?stkn=MWNvNjFiam9wOWhhdw==
  * Facebook: https://www.facebook.com/share/18iQ2gdXNt/
- Working Hours:
  * Monday to Friday: 8:00 AM – 5:00 PM
  * Saturday: 8:00 AM – 3:00 PM
  * Sunday: Closed (Emergency on-call hotline available via phone)

Services Offered:
1. Teeth Whitening: Advanced in-office laser whitening (up to 8 shades whiter in 60 mins) & custom home bleaching kits. Safe for enamel.
2. Dental Implants: High-grade titanium implants with natural porcelain crowns, 3D cone-beam computed tomography guided placement, single-tooth & all-on-4 restorations.
3. Orthodontics: Clear aligners (invisible braces), modern ceramic clear brackets, and traditional braces for children, teens, and adults.
4. Routine Checkups & Preventative Care: Ultrasonic scaling, stain removal, air polishing, digital panoramic X-rays, cavity detection, and gum health assessments.
5. Pediatric Dentistry: Gentle, playful, fear-free dentistry for kids, dental sealants, fluoride treatments, and early orthodontic evaluations.
6. Emergency Dental Care: Severe toothache, knocked-out teeth, broken crowns, dental abscesses, bleeding gums. Same-day emergency appointments.
7. Cosmetic Dentistry: Porcelain veneers, composite bonding, smile makeovers, and diastema closures.

Payment & Insurance:
- Accepted Insurances: Jubilee Insurance, AAR, Britam, APA, CIC, Madison, Resolution, Heritage, First Assurance, NHIF/SHA accreditation.
- Self-pay: M-Pesa (Till/Paybill), Visa, Mastercard, Cash, and flexible installment plans for high-value treatments (implants/orthodontics).

Instructions for your responses:
- Be warm, courteous, supportive, and succinct.
- Provide direct answers to questions about opening hours, location directions, booking steps, services, and dental tips.
- If the patient has dental pain or emergency symptoms, provide immediate soothing first-aid guidance (e.g., warm salt water rinse, cold compress, avoiding aspirin directly on gums) and urge them to call +254 795 803 669 or book an urgent appointment.
- Remind patients that AI advice does not replace a clinical examination by an EverSmile licensed dental surgeon.
- Guide patients to use the booking form on this website or call the clinic phone.
`;

// Health check route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    clinic: 'EverSmile Dental',
    timestamp: new Date().toISOString(),
  });
});

// AI Chatbot endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { messages, message } = req.body;
    const userPrompt = message || (Array.isArray(messages) && messages.length > 0 ? messages[messages.length - 1].content : '');

    if (!userPrompt || typeof userPrompt !== 'string') {
      res.status(400).json({ error: 'A message string is required.' });
      return;
    }

    const ai = getGeminiClient();

    function getKnowledgeFallback(prompt: string): string {
      const lower = prompt.toLowerCase();
      if (lower.includes('hour') || lower.includes('time') || lower.includes('open') || lower.includes('close') || lower.includes('when')) {
        return "EverSmile Dental is open Monday to Friday from 8:00 AM – 5:00 PM, and Saturday from 8:00 AM – 3:00 PM. We are closed on Sunday (with on-call emergency support). You can book an appointment anytime right here on this page!";
      } else if (lower.includes('location') || lower.includes('where') || lower.includes('address') || lower.includes('directions') || lower.includes('thika') || lower.includes('garden')) {
        return "EverSmile Dental is conveniently located at Garden City, Business Park, Suite A103 (Building A, Ground Floor), along Thika Road Exit 7, Nairobi, Kenya. There is ample secure parking inside Garden City.";
      } else if (lower.includes('phone') || lower.includes('call') || lower.includes('contact') || lower.includes('number') || lower.includes('whatsapp')) {
        return "You can call or WhatsApp our clinic desk directly at +254 795 803 669. Our patient coordinators are ready to assist you!";
      } else if (lower.includes('price') || lower.includes('cost') || lower.includes('insurance') || lower.includes('nhif') || lower.includes('m-pesa') || lower.includes('pay')) {
        return "We accept all major Kenyan health insurances (Jubilee, AAR, Britam, APA, CIC, Madison, etc.), NHIF/SHA accreditation, M-Pesa, and credit/debit cards. Transparent treatment estimates are provided during consultation.";
      } else if (lower.includes('white') || lower.includes('whitening')) {
        return "We offer professional in-office laser teeth whitening (brightens teeth up to 8 shades in a 60-minute session) as well as custom home whitening trays. Both are enamel-safe and supervised by our dental surgeons.";
      } else if (lower.includes('implant')) {
        return "Our titanium dental implants provide a permanent, natural-looking replacement for missing teeth using 3D guided precision technology to restore your bite and prevent jawbone loss.";
      } else if (lower.includes('kid') || lower.includes('child') || lower.includes('pediatric') || lower.includes('baby')) {
        return "We take pride in our family-friendly pediatric dental care! Our friendly environment and gentle dentists ensure kids and teens have a joyful, anxiety-free visit with zero tears.";
      } else if (lower.includes('emergency') || lower.includes('pain') || lower.includes('ache') || lower.includes('bleeding') || lower.includes('broken')) {
        return "If you are experiencing acute tooth pain or a dental emergency, please call us immediately at +254 795 803 669 for prioritized same-day care. In the meantime, rinse with warm salt water and apply a cold compress to the outside of your cheek.";
      } else if (lower.includes('book') || lower.includes('appointment') || lower.includes('schedule')) {
        return "You can request an appointment directly using the 'Book Appointment' form on this page, or call our desk at +254 795 803 669. We will confirm your preferred date and time quickly!";
      }
      return "Hello! Thank you for reaching out to EverSmile Dental in Garden City Business Park, Nairobi. We offer teeth whitening, dental implants, orthodontics, routine checkups, pediatric care, and emergency treatments. How may we assist your smile today?";
    }

    if (!ai) {
      res.json({ reply: getKnowledgeFallback(userPrompt) });
      return;
    }

    // Build context with history if provided
    let conversationHistory: { role: 'user' | 'model'; parts: { text: string }[] }[] = [];
    if (Array.isArray(messages) && messages.length > 1) {
      conversationHistory = messages.slice(-6).map((m: any) => ({
        role: m.sender === 'user' || m.role === 'user' ? ('user' as const) : ('model' as const),
        parts: [{ text: m.text || m.content || '' }],
      }));
    }

    // Call Gemini with a 5-second timeout race
    const generatePromise = ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: [
        ...conversationHistory,
        { role: 'user', parts: [{ text: userPrompt }] },
      ],
      config: {
        systemInstruction: CLINIC_KNOWLEDGE,
        temperature: 0.6,
      },
    });

    const timeoutPromise = new Promise<{ text: string }>((_, reject) =>
      setTimeout(() => reject(new Error('Gemini timeout')), 5000)
    );

    let reply = '';
    try {
      const result: any = await Promise.race([generatePromise, timeoutPromise]);
      reply = result.text || getKnowledgeFallback(userPrompt);
    } catch (raceErr) {
      console.warn('Gemini request timed out or failed, using knowledge fallback');
      reply = getKnowledgeFallback(userPrompt);
    }

    res.json({ reply });
  } catch (error: any) {
    console.error('Error handling /api/chat:', error);
    res.json({
      reply: "Welcome to EverSmile Dental at Garden City Business Park, Nairobi. Please call +254 795 803 669 or use the booking form to schedule an appointment.",
    });
  }
});

// Appointment booking submission endpoint
app.post('/api/bookings', (req, res) => {
  const { name, phone, email, preferredDate, preferredTime, service, message } = req.body;
  if (!name || !phone || !preferredDate) {
    res.status(400).json({ error: 'Name, phone, and preferred date are required.' });
    return;
  }

  const bookingId = `ESD-${Math.floor(100000 + Math.random() * 900000)}`;
  console.log(`[New Booking Received] ID: ${bookingId}, Patient: ${name}, Phone: ${phone}, Date: ${preferredDate}, Service: ${service || 'General Consultation'}`);

  res.status(201).json({
    success: true,
    bookingId,
    message: `Thank you, ${name}! Your appointment request has been received. Our clinic coordinator will call or WhatsApp you at ${phone} to confirm your slot.`,
    details: {
      bookingId,
      name,
      phone,
      email,
      preferredDate,
      preferredTime: preferredTime || 'Morning (8:00 AM - 12:00 PM)',
      service: service || 'General Consultation',
      clinicLocation: 'Garden City Business Park, A103 Thika Rd, Nairobi',
      clinicPhone: '+254 795 803 669',
    },
  });
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.use('/eversmile-dental', express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`EverSmile Dental server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
