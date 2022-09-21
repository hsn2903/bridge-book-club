import {
  FcAssistant,
  FcCancel,
  FcLike,
  FcPhone,
  FcRegisteredTrademark,
  FcSms,
  FcVoicemail,
  FcVoicePresentation,
} from "react-icons/fc";

import "./Purpose.css";

const Purpose = () => {
  return (
    <div className="section-purpose container mt-5">
      <div class="text-center mb-5">
        <h2>Purpose & Rules</h2>
        <p>
          In order to keep everthing working, we need some rules and system.
          These are our rules.
        </p>
      </div>

      <div className="row">
        <div className="col-12 mb-4">
          <div className="box d-flex flex-row gap-4">
            <div className="icon-box">
              <FcSms className="icon" />
            </div>
            <div className="detail-box">
              <h5>Chat area:</h5>
              <p>
                Open chat: If you would like to discuss a topic, available and
                interested people will answer you.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 mb-4">
          <div className="box d-flex flex-row gap-4">
            <div className="icon-box">
              <FcPhone className="icon" />
            </div>
            <div className="detail-box">
              <h5>Weekly calls:</h5>
              <p>
                We will discuss one chapter of a chosen book. Probably one
                chapter of a book.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 mb-4">
          <div className="box d-flex flex-row gap-4">
            <div className="icon-box">
              <FcRegisteredTrademark className="icon" />
            </div>
            <div className="detail-box">
              <h5>Rules:</h5>
              <p>The most important rule: respect.</p>
            </div>
          </div>
        </div>

        <div className="col-12 mb-4">
          <div className="box d-flex flex-row gap-4">
            <div className="icon-box">
              <FcLike className="icon" />
            </div>
            <div className="detail-box">
              <h5>Respect:</h5>
              <p>
                As there are people from different parts of the world with
                different cultures, beliefs and customs, respect is the most
                important rule of this forum. If there is a misunderstanding, we
                should request clarification so as to understand each other. All
                opinions will be respected. Our aim is to build bridges of
                understanding between cultures.
              </p>
            </div>
          </div>
        </div>

        <hr />

        <div class="text-center mb-5">
          <h2>Our Sytem</h2>
        </div>

        <div className="col-12 mb-4">
          <div className="col-12 mb-4">
            <div className="box d-flex flex-row gap-4">
              <div className="icon-box">
                <FcAssistant className="icon" />
              </div>
              <div className="detail-box">
                <h5>Voice chat:</h5>
                <p>
                  A moderator will monitor each call. Moderators would be
                  changed weekly. The moderator will help to coordinate the
                  discussion by allowing participants to share their thoughts
                  and opinions. The moderator will ensure that only one person
                  speaks at a time and will control the time limit of speakers.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 mb-4">
            <div className="box d-flex flex-row gap-4">
              <div className="icon-box">
                <FcVoicePresentation className="icon" />
              </div>
              <div className="detail-box">
                <h5>Silency during the call:</h5>
                <p>
                  Participants that do not feel confident to participate in
                  voice chat may listen in on the discussion.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 mb-4">
            <div className="box d-flex flex-row gap-4">
              <div className="icon-box">
                <FcCancel className="icon" />
              </div>
              <div className="detail-box">
                <h5>Background noise:</h5>
                <p>
                  In order to limit background noise, listeners must MUTE their
                  microphone. This will minimize interruptions while the speaker
                  is in an active conversations. It will also allow listeners to
                  understand what the speaker is trying to say without
                  background noise.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 mb-4">
            <div className="box d-flex flex-row gap-4">
              <div className="icon-box">
                <FcVoicemail className="icon" />
              </div>
              <div className="detail-box">
                <h5>Interrupting speaker:</h5>
                <p>
                  Listeners should not interrupt the speaker. If there are
                  questions or comments, we should wait for the speaker to
                  complete his/ her sentence. For sharing the call time equally
                  we should consider about other's rights to talk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purpose;
