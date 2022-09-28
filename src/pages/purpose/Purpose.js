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
    <div className="section_purpose">
      <div class="container">
        <h2 className="purpose-heading center-text">Purpose & Rules</h2>
        <p className="center-text">
          In order to keep everthing working, we need some rules and system.
          These are our rules.
        </p>

        <div className="purpose-list">
          <div className="purpose">
            <div className="icon-box">
              <FcSms className="purpose-icon" />
            </div>
            <div className="">
              <h5 className="subheading">Chat area:</h5>
              <p>
                Open chat: If you would like to discuss a topic, available and
                interested people will answer you.
              </p>
            </div>
          </div>
          <div className="purpose">
            <div className="icon-box">
              <FcPhone className="purpose-icon" />
            </div>
            <div className="">
              <h5 className="subheading">Weekly Calls:</h5>
              <p>
                We will discuss one chapter of a chosen book. Probably one
                chapter of a book.
              </p>
            </div>
          </div>
          <div className="purpose">
            <div className="icon-box">
              <FcRegisteredTrademark className="purpose-icon" />
            </div>
            <div className="">
              <h5 className="subheading">Rules:</h5>
              <p>The most important rule: respect.</p>
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
      </div>
      <div className="container">
        <h2 className="purpose-heading center-text">Our Sytem</h2>
        <div className="purpose-list">
          <div className="purpose">
            <div className="icon-box">
              <FcAssistant className="purpose-icon" />
            </div>
            <div className="">
              <h5 className="subheading">Voice chat:</h5>
              <p>
                A moderator will monitor each call. Moderators would be changed
                weekly. The moderator will help to coordinate the discussion by
                allowing participants to share their thoughts and opinions. The
                moderator will ensure that only one person speaks at a time and
                will control the time limit of speakers.
              </p>
            </div>
          </div>
        </div>

        <div className="purpose">
          <div className="icon-box">
            <FcVoicePresentation className="purpose-icon" />
          </div>
          <div className="">
            <h5 className="subheading">Silency during the call:</h5>
            <p>
              Participants that do not feel confident to participate in voice
              chat may listen in on the discussion.
            </p>
          </div>
        </div>

        <div className="purpose">
          <div className="icon-box">
            <FcCancel className="purpose-icon" />
          </div>
          <div className="">
            <h5 className="subheading">Background noise:</h5>
            <p>
              In order to limit background noise, listeners must MUTE their
              microphone. This will minimize interruptions while the speaker is
              in an active conversations. It will also allow listeners to
              understand what the speaker is trying to say without background
              noise.
            </p>
          </div>
        </div>

        <div className="purpose">
          <div className="icon-box">
            <FcVoicemail className="purpose-icon" />
          </div>
          <div className="">
            <h5 className="subheading">Interrupting speaker:</h5>
            <p>
              Listeners should not interrupt the speaker. If there are questions
              or comments, we should wait for the speaker to complete his/ her
              sentence. For sharing the call time equally we should consider
              about other's rights to talk.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purpose;
