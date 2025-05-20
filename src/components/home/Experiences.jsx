import React from 'react';

const experiences = [
  {
    number: '40+',
    icon: '/icons/process1.svg',
    title: 'Years Experience',
    desc: 'Over 40 years of excellence delivering reliable services.'
  },
  {
    number: '500+',
    icon: '/icons/process2.svg',
    title: 'Happy Clients',
    desc: 'We’ve built trusted partnerships with 500+ businesses.'
  },
  {
    number: '1200+',
    icon: '/icons/process3.svg',
    title: 'Projects Delivered',
    desc: 'Successfully completed over 1200 projects worldwide.'
  },
];

const ExperienceSection = () => {
  return (
    <section className="experience-section text-center">
      <div className="shape-img">
        <img src="/images/bg.png" alt="shape" />
      </div>

      <div className="container">
        <div className="section-header">
          <p className='section_hint'>Our experience</p>
          <h2>Trusted by clients for <br /> decades of success</h2>
        </div>
        <div className="row">
          {experiences.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <div className="experience-box">
                <div className="step-number">{item.number}</div>
                <div className="icon">
                  <img src={item.icon} alt={item.title} />
                </div>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
};

export default ExperienceSection;
