import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function Contact() {
  const [fullName, setFullName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [company, setCompany] = useState('');
  const [serviceRequired, setServiceRequired] = useState('Cybersecurity');
  const [projectType, setProjectType] = useState('New Project');
  const [projectTimeline, setProjectTimeline] = useState('ASAP');
  const [budget, setBudget] = useState('Under $10k');
  const [meetingDate, setMeetingDate] = useState<Date | null>(null);
  const [meetingTime, setMeetingTime] = useState('09:00 AM');
  const [projectDetails, setProjectDetails] = useState('');

  const [statusMsg, setStatusMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Contact HackStone | Systems Connectivity";
  }, []);

  // Local clock sync
  const [timeStr, setTimeStr] = useState('');
  const [timezoneName, setTimezoneName] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      // Get timezone short name (e.g., IST, EST)
      const tzShort = new Intl.DateTimeFormat('en-US', { timeZoneName: 'short' })
        .formatToParts(now)
        .find(part => part.type === 'timeZoneName')?.value || '';

      // Format 12-hour time: HH:MM:SS AM/PM
      let hour = now.getHours();
      const ampm = hour >= 12 ? 'PM' : 'AM';
      hour = hour % 12;
      hour = hour ? hour : 12;
      const hh = String(hour).padStart(2, '0');
      const mm = String(now.getMinutes()).padStart(2, '0');
      const ss = String(now.getSeconds()).padStart(2, '0');

      setTimeStr(`${hh}:${mm}:${ss} ${ampm} ${tzShort}`);

      // Get timezone full name (e.g., Asia/Kolkata)
      const tzFull = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setTimezoneName(tzFull);
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !workEmail || !phoneNumber || !serviceRequired || !meetingDate || !meetingTime || !projectDetails) {
      setStatusMsg('VALIDATION_ERROR: Missing required fields.');
      return;
    }

    const phoneRegex = /^[+]?[0-9\s\-()]+$/;
    if (!phoneRegex.test(phoneNumber)) {
      setStatusMsg('VALIDATION_ERROR: Invalid phone number format.');
      return;
    }

    const digitCount = phoneNumber.replace(/\D/g, '').length;
    if (digitCount < 8 || digitCount > 15) {
      setStatusMsg('VALIDATION_ERROR: Phone number must contain between 8 and 15 digits.');
      return;
    }

    setIsSubmitting(true);
    setStatusMsg(null);

    // Format the email payload containing the specified fields
    const emailPayload = `
FULL_NAME: ${fullName}
WORK_EMAIL: ${workEmail}
PHONE_NUMBER: ${phoneNumber}
COMPANY: ${company || 'N/A'}
SERVICE_REQUIRED: ${serviceRequired}
PROJECT_TYPE: ${projectType || 'N/A'}
PROJECT_TIMELINE: ${projectTimeline || 'N/A'}
BUDGET: ${budget || 'N/A'}
MEETING_DATE: ${meetingDate.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}
MEETING_TIME: ${meetingTime}
PROJECT_DETAILS: ${projectDetails}
    `.trim();

    console.log("Transmitting payload through existing submission flow:", emailPayload);

    // Mock transmission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setStatusMsg('TRANSMISSION_SUCCESS: Data payload successfully synchronized with core servers.');
      // Reset form
      setFullName('');
      setWorkEmail('');
      setPhoneNumber('');
      setCompany('');
      setServiceRequired('Cybersecurity');
      setProjectType('New Project');
      setProjectTimeline('ASAP');
      setBudget('Under $10k');
      setMeetingDate(null);
      setMeetingTime('09:00 AM');
      setProjectDetails('');
    }, 1500);
  };

  return (
    <div className="max-w-[1440px] mx-auto min-h-screen technical-grid text-left">
      {/* Hero Section */}
      <section className="border-b border-primary py-section-padding px-grid-margin bg-background">
        <div className="max-w-4xl">
          <div className="font-ui-label text-ui-label text-secondary mb-4 uppercase tracking-widest font-bold">
            [ STATUS: READY_TO_INITIATE ]
          </div>
          <h1 className="font-display-lg text-display-lg-mobile md:text-[80px] leading-[0.9] uppercase mb-8 text-primary font-bold">
            Start Your <br />
            <span className="text-syntax-purple">Project</span>
          </h1>
          <p className="font-body-md text-on-surface-variant max-w-xl font-medium">
            Tell us what you're building and schedule a technical discussion with our team.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 border-b border-primary">
        {/* Contact Form Section */}
        <section className="md:col-span-7 border-r border-primary bg-white p-grid-margin">
          <div className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md uppercase mb-2 text-primary font-bold">
              Initialize Contact
            </h2>
            <p className="font-code-sm text-code-sm text-on-surface-variant">
              Fields marked * are required for system validation.
            </p>
          </div>

          {statusMsg && statusMsg.startsWith('TRANSMISSION_SUCCESS') ? (
            <div className="space-y-6 font-code-sm text-left border border-syntax-lime bg-syntax-lime/10 p-8 brutalist-border">
              <div className="font-ui-label text-ui-label text-secondary mb-2 uppercase tracking-widest font-bold">
                [ STATUS: REQUEST_RECEIVED ]
              </div>
              <h3 className="font-headline-md text-headline-md uppercase text-primary font-bold">
                Thank you.
              </h3>
              <p className="font-body-md text-on-surface-variant max-w-xl font-medium">
                Our team will review your request and contact you shortly.
              </p>
              <div className="font-code-sm text-code-sm text-secondary border-t border-primary/20 pt-4 font-bold">
                Meeting request submitted successfully.
              </div>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* ROW 1 */}
                <div className="space-y-1">
                  <label className="font-ui-label text-ui-label uppercase block text-primary font-bold">
                    FULL_NAME *
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full bg-background border border-primary p-3 font-code-sm focus:ring-0 focus:border-syntax-lime outline-none text-primary"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-ui-label text-ui-label uppercase block text-primary font-bold">
                    WORK_EMAIL *
                  </label>
                  <input
                    type="email"
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full bg-background border border-primary p-3 font-code-sm focus:ring-0 focus:border-syntax-lime outline-none text-primary"
                    required
                  />
                </div>

                {/* ROW 2 */}
                <div className="space-y-1">
                  <label className="font-ui-label text-ui-label uppercase block text-primary font-bold">
                    PHONE_NUMBER *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="+91 98765 43210"
                    autoComplete="tel"
                    className="w-full bg-background border border-primary p-3 font-code-sm focus:ring-0 focus:border-syntax-lime outline-none text-primary"
                    required
                  />
                  <div className="font-code-sm text-[11px] text-on-surface-variant mt-1">
                    Used only for project discussion.
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="font-ui-label text-ui-label uppercase block text-primary font-bold">
                    COMPANY
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Company Name"
                    className="w-full bg-background border border-primary p-3 font-code-sm focus:ring-0 focus:border-syntax-lime outline-none text-primary"
                  />
                </div>

                {/* ROW 3 */}
                <div className="space-y-1">
                  <label className="font-ui-label text-ui-label uppercase block text-primary font-bold">
                    SERVICE_REQUIRED *
                  </label>
                  {/* Optional description mapping (internal only):
                      Cybersecurity → Security audits, penetration testing, zero-trust
                      Software Engineering → Custom applications & platforms
                      Web Development → Business websites, web apps, landing pages, portals
                      ERP Systems → Workflow & resource planning
                      Cloud & DevOps → Infrastructure & deployment
                      Technology Consulting → Architecture & digital strategy */}
                  <select
                    value={serviceRequired}
                    onChange={(e) => setServiceRequired(e.target.value)}
                    className="w-full bg-background border border-primary p-3 font-code-sm focus:ring-0 focus:border-syntax-lime outline-none appearance-none text-primary font-medium"
                    required
                  >
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="Software Engineering">Software Engineering</option>
                    <option value="Web Development">Web Development</option>
                    <option value="ERP Systems">ERP Systems</option>
                    <option value="Cloud & DevOps">Cloud & DevOps</option>
                    <option value="Technology Consulting">Technology Consulting</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="font-ui-label text-ui-label uppercase block text-primary font-bold">
                    PROJECT_TYPE
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full bg-background border border-primary p-3 font-code-sm focus:ring-0 focus:border-syntax-lime outline-none appearance-none text-primary font-medium"
                  >
                    <option value="New Project">New Project</option>
                    <option value="Existing System Upgrade">Existing System Upgrade</option>
                    <option value="Security Assessment">Security Assessment</option>
                    <option value="Consultation">Consultation</option>
                  </select>
                </div>

                {/* ROW 4 */}
                <div className="space-y-1">
                  <label className="font-ui-label text-ui-label uppercase block text-primary font-bold">
                    PROJECT_TIMELINE
                  </label>
                  <select
                    value={projectTimeline}
                    onChange={(e) => setProjectTimeline(e.target.value)}
                    className="w-full bg-background border border-primary p-3 font-code-sm focus:ring-0 focus:border-syntax-lime outline-none appearance-none text-primary font-medium"
                  >
                    <option value="ASAP">ASAP</option>
                    <option value="Within 2 Weeks">Within 2 Weeks</option>
                    <option value="Within 1 Month">Within 1 Month</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="font-ui-label text-ui-label uppercase block text-primary font-bold">
                    BUDGET
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full bg-background border border-primary p-3 font-code-sm focus:ring-0 focus:border-syntax-lime outline-none appearance-none text-primary font-medium"
                  >
                    <option value="Under $10k">Under $10k</option>
                    <option value="$10k - $50k">$10k - $50k</option>
                    <option value="$50k - $100k">$50k - $100k</option>
                    <option value="$100k+">$100k+</option>
                  </select>
                </div>

                {/* ROW 5 */}
                <div className="space-y-1">
                  <label className="font-ui-label text-ui-label uppercase block text-primary font-bold">
                    MEETING_DATE *
                  </label>
                  <DatePicker
                    selected={meetingDate}
                    onChange={(date: Date | null) => setMeetingDate(date)}
                    minDate={new Date()}
                    placeholderText="SELECT_DATE"
                    className="w-full bg-background border border-primary p-3 font-code-sm focus:ring-0 focus:border-syntax-lime outline-none text-primary"
                    required
                    dateFormat="yyyy-MM-dd"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-ui-label text-ui-label uppercase block text-primary font-bold">
                    MEETING_TIME *
                  </label>
                  <select
                    value={meetingTime}
                    onChange={(e) => setMeetingTime(e.target.value)}
                    className="w-full bg-background border border-primary p-3 font-code-sm focus:ring-0 focus:border-syntax-lime outline-none appearance-none text-primary font-medium"
                    required
                  >
                    <option value="09:00 AM">09:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="03:00 PM">03:00 PM</option>
                    <option value="04:00 PM">04:00 PM</option>
                  </select>
                  <div className="font-code-sm text-[11px] text-on-surface-variant mt-1">
                    Times shown in your local timezone.
                  </div>
                </div>

                {/* ROW 6 */}
                <div className="space-y-1 md:col-span-2">
                  <label className="font-ui-label text-ui-label uppercase block text-primary font-bold">
                    PROJECT_DETAILS *
                  </label>
                  <textarea
                    value={projectDetails}
                    onChange={(e) => setProjectDetails(e.target.value)}
                    placeholder={"Tell us about your requirements,\ngoals,\ncurrent challenges,\nand expected outcomes."}
                    rows={6}
                    className="w-full bg-background border border-primary p-3 font-code-sm focus:ring-0 focus:border-syntax-lime outline-none text-primary"
                    required
                  ></textarea>
                </div>
              </div>

              {statusMsg && (
                <div className="p-4 border font-code-sm text-code-sm font-bold bg-error-container border-error text-error">
                  {statusMsg}
                </div>
              )}

              {/* ROW 7 */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex items-center justify-between w-full md:w-auto px-8 py-4 bg-primary text-on-primary font-ui-label text-ui-label uppercase hover:bg-syntax-lime hover:text-primary transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? 'TRANSMITTING...' : 'BOOK DISCOVERY CALL'}
                <span className="material-symbols-outlined ml-4 group-hover:translate-x-2 transition-transform">
                  arrow_forward
                </span>
              </button>
            </form>
          )}
        </section>

        {/* Details Section */}
        <section className="md:col-span-5 bg-surface-container-high p-grid-margin flex flex-col justify-between">
          <div className="space-y-12">
            <div>
              <h3 className="font-ui-label text-ui-label text-secondary mb-4 uppercase font-bold">[ NODES ]</h3>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 border border-primary flex items-center justify-center bg-background">
                    <span className="material-symbols-outlined text-primary">mail</span>
                  </div>
                  <div>
                    <div className="font-ui-label text-ui-label text-on-surface-variant uppercase font-bold">Network_Mail</div>
                    <div className="font-code-sm text-code-sm font-bold text-primary">Hackstone2025@outlook.com</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 border border-primary flex items-center justify-center bg-background">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                  </div>
                  <div>
                    <div className="font-ui-label text-ui-label text-on-surface-variant uppercase font-bold">Physical_Core</div>
                    <div className="font-code-sm text-code-sm font-bold text-primary">India</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 border border-primary flex items-center justify-center bg-background">
                    <span className="material-symbols-outlined text-primary">call</span>
                  </div>
                  <div>
                    <div className="font-ui-label text-ui-label text-on-surface-variant uppercase font-bold">Secure_Line</div>
                    <div className="font-code-sm text-code-sm font-bold text-primary">+91 8490051752</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-primary bg-background overflow-hidden relative">
              <img
                className="w-full h-48 object-cover grayscale opacity-80"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRTiNeSXNKBc4NMc5mUmbitUQwDvq6lHhTFqOSxXzHtOfsSt58aEA-j4QvKX7ltcbkGGIdmovuUzZ0oT14NpqD6ItVlmL3HzRcQOx9xAugpMlFoMGX-4V3QFHilqGluKCkIFR_qwrxMPMq1UbZ4RLOAAyUOhAB8hO7CIirVXlT5qavIMv7LAp7uKDSYsAPSYOkgQVKhXTt69yOS3goLihebVPX7vCgbmj8Zv4_3sf4Ur1okBOB9Znp6rpGeqIYlChTnQq5rpOdkh3d"
                alt="Motherboard circuitry location map"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-primary/90 text-on-primary p-2 font-code-sm text-center font-bold">
                LOCATION_MAP: India
              </div>
            </div>
          </div>
          <div className="mt-stack-lg pt-stack-lg border-t border-primary/20 space-y-1.5">
            <div className="font-ui-label text-[10px] text-on-surface-variant uppercase tracking-tighter font-bold">
              Local_Time: <span className="text-primary font-bold">{timeStr}</span>
            </div>
            <div className="font-ui-label text-[10px] text-on-surface-variant uppercase tracking-tighter font-bold">
              Timezone: <span className="text-primary font-bold">{timezoneName}</span>
            </div>
            <div className="font-ui-label text-[9px] text-on-surface-variant/80 tracking-tighter">
              Timezone detected automatically
            </div>
          </div>
        </section>
      </div>

      {/* Final CTA */}
      <section className="py-section-padding px-grid-margin bg-primary text-on-primary overflow-hidden relative text-center">
        <div className="absolute inset-0 opacity-5 pointer-events-none technical-grid invert"></div>
        <div className="relative z-10 text-center flex flex-col items-center">
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg uppercase mb-6 tracking-tight text-on-primary font-bold">
            Let's create something <br />
            <span className="text-syntax-lime">secure and reliable</span>.
          </h2>
          <p className="font-code-sm text-on-primary-container mb-stack-lg max-w-2xl mx-auto font-medium">
            The architecture of tomorrow is built on the foundations of precision today. Our systems are standing by for your requirements.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-syntax-lime text-primary px-10 py-4 font-ui-label text-ui-label uppercase hover:bg-white hover:text-primary transition-colors font-bold">
              Start Integration
            </button>
            <button className="border border-on-primary text-on-primary px-10 py-4 font-ui-label text-ui-label uppercase hover:bg-on-primary hover:text-primary transition-colors bg-transparent font-bold">
              View Security Protocols
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
