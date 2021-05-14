import React from 'react'
import {Zoom} from 'react-reveal'

export const MeetOurTeam = () => {
  return (
    <div>
      <Zoom>
        <h1 id="intro">"Our Team"</h1>
      </Zoom>
      <div className="row">
        <div className="column">
          <div className="card">
            <img id="therapist" src="rocko.png" alt="Jane" />
            <div className="container">
              <h2>Adriana Khoker, LCSW</h2>
              <p className="title">CEO & Founder</p>
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
              <p>example@example.com</p>
              <p>
                <button type="button" className="button">
                  Contact
                </button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img id="therapist" src="rocko.png" alt="Mike" />
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
              <p>example@example.com</p>
              <p>
                <button type="button" className="button">
                  Contact
                </button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img id="therapist" src="rocko.png" alt="John" />
            <div className="container">
              <h2>John Doe</h2>
              <p className="title">Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>example@example.com</p>
              <p>
                <button type="button" className="button">
                  Contact
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MeetOurTeam
