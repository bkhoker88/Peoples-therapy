import React from 'react'
import {Zoom} from 'react-reveal'

export const MeetOurTeam = () => {
  return (
    <div className="Team">
      {/* <img src="bronx.jpg"/> */}
      <h1 id="introTitle">Our Team</h1>
      <div className="row">
        <div className="column">
          <div className="card">
            <img id="therapist" src="Boo.png" alt="Jane" />
            <div className="container">
              <h2>Adriana Khoker, LCSW-R</h2>
              <h4 className="title">CEO & Founder</h4>
              <p>
                Adriana is a native New Yorker and familiar with the stressors
                that come with living in NYC. She received her undergraduate
                degree from Stony Brook University and her MSW from the
                Silberman School of Social Work at Hunter College. Adriana has
                extensive experience working with people from all walks of life
                including, the formerly incarcerated, undocumented, and severe
                mental illnesses. She also has an array of experience in
                different settings including, clinic work, mental health
                startups, and private practice. Adriana enjoys working with
                people who struggle with anxiety, depression, trauma, grief,
                divorce, relationships and life transitions. She implements a
                variety of interventions including her training in CBT, REBT,
                Complicated Grief Therapy, and EMDR.
              </p>
              <p>
                Adriana founded The People’s Therapy with the mission of making
                great mental health care not only accessible but affordable. She
                hopes to provide an environment in which people from all walks
                of life feel welcomed and accepted at her practice.{' '}
              </p>
              {/* <p>example@example.com</p> */}
              <div> Not accepting new patients</div>
              <p>
                {/* <button type="button" className="button">
                  Contact
                </button> */}
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img id="therapist" src="shaynell.jpg" alt="Mike" />
            <div className="container">
              <h2>Shaynel Roberts, LMSW</h2>
              <p className="title">Psychotherapist</p>
              <p>
                Shaynel is a psychotherapist who works with adults, children and
                adolescents as well as their families. She has a particular
                focus on those struggling with depression, anxiety, behavior
                concerns, communication struggles, and work and relationship
                issues. She utilizes a warm and collaborative approach during
                treatment and makes sure to identify your goals and set a
                treatment plan to get you feeling better and more balanced.
              </p>
              <p>
                Shaynel enjoys an eclectic approach with her clients utilizing
                cognitive behavior interventions, DBT, REBT, MI, family systems,
                and mindfulness to help you understand the challenges you face.
                She has extensive experience in behavioral health settings,
                school settings, outpatient and in-home services, as well as in
                the child welfare system.
              </p>
              {/* <p>example@example.com</p> */}
              <p>
                {/* <button type="button" className="button">
                  Contact
                </button> */}
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img id="therapist" src="darrlyn.jpeg" alt="John" />
            <div className="container">
              <h2>Darrlyn Moorer, LMSW</h2>
              <p className="title">Psychotherapist</p>
              <p>
                My name is Darrlyn Moorer and I’m a native New Yorker passionate
                about serving the needs of my community. I view the relationship
                between the clinician and client as a collaboration; I want my
                clients to truly feel like they are a part of the therapeutic
                process and are in charge of their counseling experience. I have
                a broad range of clinical experience in the child welfare,
                family homelessness and healthcare fields, and have worked with
                adults, children and families. I also have an extensive
                background of providing support to diverse groups of people
                including but not limited to those who identified as BIPOC
                and/or LGBTQIA+.
              </p>
              <p>
                I employ a strengths-based, client centered, trauma informed
                approach in my practice and utilize Motivational Interviewing,
                Cognitive Reframing and Crisis Intervention. My goal as a
                therapist is to provide a safe environment where we can explore
                your primary interests, identify goals and develop a treatment
                plan to fit you and your aspirations.
              </p>
              {/* <p>example@example.com</p> */}
              <p>
                {/* <button type="button" className="button">
                  Contact
                </button> */}
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img id="therapist" src="Monica.png" />
            <div className="container">
              <h2>Monica Suarez, LMSW</h2>
              <p className="title">Psychotherapist</p>
              <p>
                My name is Monica Suarez and I'm a native New Yorker with a
                passion for supporting others in the NYC community. I received
                my undergraduate degree from John Jay College of Criminal
                Justice and my MSW from NYU Silver School of Social Work. I have
                broad experience with working with people from different walks
                of life such as undocumented, severely mentally ill, and history
                of substance use. I enjoy working with people who struggle with
                anxiety, depression, trauma, life transitions, and teenagers. I
                have an extensive history of working with children, youth, and
                families. Particularly with adolescents in their transitioning
                from children to young adults.
              </p>
              <p>
                I view my work to be a partnership between clinician and client.
                I strongly utilize a strength-based and trauma-based approach in
                my practice by using Cognitive Behavioral Therapy, Motivational
                Interviewing, and Crisis Intervention. My goal as a therapist is
                to provide a safe space for you to be your most authentic self
                where we can work together on building skills that work for you
                throughout your treatment.
              </p>
              {/* <p>example@example.com</p> */}
              <p>
                {/* <button type="button" className="button">
                  Contact
                </button> */}
              </p>
            </div>
          </div>
        </div>

        {/* <div className="column">
          <div className="card">
            <img id="therapist" src="shaynell.jpg" alt="Mike" />
            <div className="container">
              <h2>Shaynel Roberts, LMSW</h2>
              <p className="title">Psychotherapist</p>
              <p>
                Shaynel is a psychotherapist who works with adults, children and
                adolescents as well as their families. She has a particular
                focus on those struggling more balanced.
              </p>
              <p>
                Shaynel enjoys an eclectic approach with her clients utilizing
                cognitive behavior interventions, outpatient and in-home
                services, as well as in the child welfare system.
              </p>
              <p>example@example.com</p>
              <p>
                <button type="button" className="button">
                  Contact
                </button>
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default MeetOurTeam
