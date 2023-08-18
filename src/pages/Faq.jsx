const Faq = () => {
  return (
    <>
      <div className="accordion" id="faqAccord">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button bg-body-secondary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq1"
              aria-expanded="true"
              aria-controls="faq1">
              How do I register for the HacKnight Hackathon?
            </button>
          </h2>
          <div
            id="faq1"
            className="accordion-collapse collapse show"
            data-bs-parent="#faqAccord">
            <div className="accordion-body">
              Registration is easy! Just visit our registration page, provide
              your details, and you will receive a confirmation email with
              further instructions.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button bg-body-secondary collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq2"
              aria-expanded="false"
              aria-controls="faq2">
              Can I participate individually, or do I need to form a team?
            </button>
          </h2>
          <div
            id="faq2"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccord">
            <div className="accordion-body">
              You can participate either as an individual or as part of a team.
              If you are joining as an individual, we will help you find a
              compatible team during the event.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button bg-body-secondary collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq3"
              aria-expanded="false"
              aria-controls="faq3">
              Are there any specific prerequisites to participate in HacKnight?
            </button>
          </h2>
          <div
            id="faq3"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccord">
            <div className="accordion-body">
              HacKnight is open to enthusiasts of all skill levels, from
              beginners to experts. Whether you are a coder, designer, or have a
              brilliant idea, you are welcome to join us and contribute your
              unique talents.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button bg-body-secondary collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq4"
              aria-expanded="false"
              aria-controls="faq4">
              What rewards and prizes can participants expect from HacKnight?
            </button>
          </h2>
          <div
            id="faq4"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccord">
            <div className="accordion-body">
              We have exciting prizes for various categories, including Best
              Innovation, Most Creative Solution, and more. Additionally, all
              participants will receive certificates of participation, making
              your experience at HacKnight truly memorable.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
