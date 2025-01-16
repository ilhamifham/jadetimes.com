const ContactDetails = () => {
  return (
    <>
      <div>
        <h3 className="font-semibold mb-1">Online</h3>
        <div>Submit Request Form</div>
        <div>Live Chat</div>
        <div>
          Email : <a href="mailto:Info@jadetimes.com">Info@jadetimes.com</a>
        </div>
      </div>
      <div>
        <h3 className="font-semibold mb-1">Post</h3>
        <address>
          <div>Jadetimes Media LLC</div>
          <div>8206 Louisiana Blvd NE,</div>
          <div>Ste B #10483 Albuquerque,</div>
          <div>NM 87113 United States</div>
        </address>
      </div>
      <div>
        <h3 className="font-semibold mb-1">Phone</h3>
        <div>USA : +1 9293213710</div>
      </div>
      <p className="text-xs mt-auto">
        *Thank you for being a valued member of the Jadetimes Media community. We are dedicated to bringing you the stories that matter, with
        insightful analysis, breaking news, and a diverse range of perspectives. Your engagement and support are what drive us to deliver high quality
        content every day. We look forward to continuing this journey together, providing you with the news and information you need and trust. Thank
        you for choosing Jadetimes Media as your go-to source for the stories that shape our world.
      </p>
    </>
  );
};

export default ContactDetails;
