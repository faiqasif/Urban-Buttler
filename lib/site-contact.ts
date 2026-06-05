export const urbanButlerEmail = "hello@urbanbutlerconcierge.com";

export const urbanButlerEmailHref = `mailto:${urbanButlerEmail}`;

type ContactFormEmailData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

export function buildContactFormMailtoHref({
  firstName,
  lastName,
  email,
  phone,
  interest,
  message,
}: ContactFormEmailData) {
  const subject = `Contact Inquiry: ${interest}`;
  const body = [
    "Hello Urban Butler,",
    "",
    "I would like to get in touch regarding your services.",
    "",
    `Name: ${firstName} ${lastName}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    `Interested In: ${interest}`,
    "",
    "Message:",
    message || "Not provided",
  ].join("\n");

  const params = new URLSearchParams({
    subject,
    body,
  });

  return `mailto:${urbanButlerEmail}?${params.toString()}`;
}
