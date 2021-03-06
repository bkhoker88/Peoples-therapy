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
              <p id="indent">
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
              <p id="indent">
                Adriana founded The People’s Therapy with the mission of making
                great mental health care not only accessible but affordable. She
                hopes to provide an environment in which people from all walks
                of life feel welcomed and accepted at her practice.{' '}
              </p>
              {/* <p>example@example.com</p> */}

              <p>
                {/* <button type="button" className="button">
                  Contact
                </button> */}
              </p>
              <div id="notaccepting"> not accepting new patients</div>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img id="therapist" src="Darrlyn.jpg" alt="John" />
            <div className="container">
              <h2>Darrlyn Moorer, LCSW</h2>
              <p className="title">Clinical Supervisor / Psychotherapist</p>
              <p id="indent">
                Darrlyn Moorer is a native New Yorker passionate about serving
                the needs of her community. She views the relationship between
                the clinician and client as a collaboration; she wants her
                clients to truly feel like they are a part of the therapeutic
                process and are in charge of their counseling experience.
                Darrlyn has a broad range of clinical experience in the child
                welfare, family homelessness and healthcare fields, and has
                worked with adults, children and families. She also has an
                extensive background of providing support to diverse groups of
                people including but not limited to those who identify as BIPOC
                and/or LGBTQIA+.
              </p>
              <p id="indent">
                She employs a strengths-based, client centered, trauma informed
                approach in her practice and utilizes Motivational Interviewing,
                Cognitive Reframing and Crisis Intervention. Her goal as a
                therapist is to provide a safe environment where you can explore
                your primary interests, identify goals and develop a treatment
                plan to fit you and your aspirations.
              </p>
              {/* <div id="accepting"> accepting new patients</div> */}
              <div id="notaccepting"> not accepting new patients</div>
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
              <div id="accepting"> accepting new patients</div>
              {/* <p>example@example.com</p> */}
              <p>
                {/* <button type="button" className="button">
                  Contact
                </button> */}
              </p>
              {/* <div id="notaccepting"> not accepting new patients</div> */}
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img id="therapist" src="Monica.png" />
            <div className="container">
              <h2>Monica Suarez, LMSW</h2>
              <p className="title">Psychotherapist</p>
              <p id="indent">
                Monica Suarez is a psychotherapist with a passion for supporting
                others in the NYC community. She received her undergraduate
                degree from John Jay College of Criminal Justice and her MSW
                from NYU Silver School of Social Work. She has broad experience
                working with people from different walks of life such as
                undocumented, severely mentally ill, and history of substance
                use. She enjoys working with people who struggle with anxiety,
                depression, trauma, life transitions, and teenagers. Monica has
                an extensive history of working with children, youth, and
                families; particularly with adolescents and their transitioning
                from children to young adults.
              </p>
              <p id="indent">
                She views her work to be a partnership between clinician and
                client. Monica strongly utilizes a strength-based and
                trauma-based approach in her practice by using Cognitive
                Behavioral Therapy, Motivational Interviewing, and Crisis
                Intervention. Her goal as a therapist is to provide a safe space
                for you to be your most authentic self and build skills that
                work for you throughout your treatment.
              </p>
              <div id="accepting"> accepting new patients</div>
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
            <img id="therapist" src="Giuseppa.jpg" alt="Mike" />
            <div className="container">
              <h2>Giuseppa LaCorte, LMSW </h2>
              <p className="title">Psychotherapist</p>
              <p id="indent">
                Giuseppa LaCorte is a psychotherapist who works with teens,
                young adults, and adults. She has a passion for helping others
                and would love to be a support through your most difficult
                stressors in life. She has extensive clinical experience in
                working with severe mental illness, substance use disorders, and
                those with co-occurring disorders.
              </p>
              <p id="indent">
                She employs a strengths-based perspective, client centered, and
                shared decision-making model in all her sessions. She also
                utilizes motivational interviewing, Cognitive Behavioral
                Therapy, and various other modalities in order to help you
                realize your goals. Her goal as a therapist is to provide a
                warm, non-judgmental, and safe environment for all of her
                clients.
              </p>
              <div id="accepting"> accepting new patients</div>
              {/* <p>example@example.com</p> */}
              {/* <p>
                <button type="button" className="button">
                  Contact
                </button>
              </p> */}
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img id="therapist" src="erika.jpg" alt="Mike" />
            <div className="container">
              <h2>Erika Richardson, LMSW</h2>
              <p className="title">Psychotherapist</p>
              <p id="indent">
                Erika is a bilingual (English and Spanish) Licensed Master of
                Social Work. She obtained her Master's Degree in Social Welfare
                from Stony Brook University in 2017. Erika works to establish a
                safe and empathetic therapeutic environment where
                client-centered practices can be established to make each
                individual client feel comfortable enough to explore their
                emotions. Erika specializes in working with teenagers and young
                adults, but she has a great deal of experience working with
                children, families, and adults.
              </p>
              <p id="indent">
                She has aided clients in working through issues related to
                anxiety, depression, ADD/ADHD, autism spectrum disorder,
                self-esteem, trauma, parenting practices, interpersonal
                relationships, and other life concerns. Erika's work is rooted
                in a holistic, strength based, client-centered approach that is
                tailored to each individual client based on their own needs,
                strengths, and goals.
                <div id="accepting"> accepting new patients</div>
                {/* <p>example@example.com</p> */}
                {/* <button type="button" className="button">
                  Contact
                </button> */}
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img id="therapist" src="ana.JPEG" alt="Jane" />
            <div className="container">
              <h2>Ana Ladino, LMSW</h2>
              <h4 className="title">Psychotherapist</h4>
              <p id="indent">
                Ana is a passionate and warm bilingual (Spanish and English)
                Licensed Master of Social Worker. She obtained her Master’s
                degree from Columbia University in 2020. She attended New York
                University for her Bachelor’s Degree in 2017. She has clinical
                experience in different settings including outpatient treatment
                programs, school settings and private practice. She can work
                with all age groups from young children to adults. She utilizes
                a combination of different therapy approaches including:
                client-centered, Cognitive Behavioral Therapy, Psychodynamic,
                Mindfulness Skills, Supportive Counseling, Trauma-Informed Care,
                Crisis Intervention, Family-Systems and Strengths Based
                approaches. She understands the importance of a multimodal
                approach to treatment to support clients in exploring their
                inner worlds and intersecting identities.
              </p>
              <p id="indent">
                Through building a solid rapport and forming strong treatment
                alliances, Ana works towards helping her client’s learn healthy
                and adaptive coping skills, increase awareness and experience
                greater joy when overcoming challenges in their lives. Ana
                ensures each client is part of their own individualized plan to
                be able to meet their mental health needs. Ana’s utmost priority
                is to provide a safe and non-judgmental environment in which
                clients can explore the therapeutic experience and feel listened
                to, supported and validated.
              </p>
              {/* <p>example@example.com</p> */}

              <p>
                {/* <button type="button" className="button">
                  Contact
                </button> */}
              </p>
              <div id="accepting"> accepting new patients</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MeetOurTeam
