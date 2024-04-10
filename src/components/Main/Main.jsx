import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import devicesImg from '../../images/devices.png';
import ShowMoreLess from './ShowMoreLess/ShowMoreLess';
import chart from '../../images/chart.png';
import './Main.scss';

const Main = () => {
  const [showLessonsMore, setShowLessonsMore] = useState(false);
  const [showLearningMore, setShowLearningMore] = useState(false);
  const [showJourneyMore, setShowJourneyMore] = useState(false);
  const [showSuccessMore, setShowSuccessMore] = useState(false);

  const [showEducationMore, setShowEducationMore] = useState(false);
  const [showDisciplineMore, setShowDisciplineMore] = useState(false);
  const [showPatienceMore, setShowPatienceMore] = useState(false);
  const [showStrategyMore, setShowStrategyMore] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!showJourneyMore) {
      setShowEducationMore(false);
      setShowDisciplineMore(false);
      setShowPatienceMore(false);
      setShowStrategyMore(false);
    }
  }, [showJourneyMore]);

  return (
    <div className="main">
      <button className="main__btn btn btn_transparent" onClick={() => navigate('/booking')}>
        Try for free
      </button>
      <section className="slide-section">
        <div className="container">
          <div className="slide">
            <h1 className="slide__title">New to trading?</h1>
            <p className="slide__text text">
              Learn how to trade stocks with confidence through a structured process designed to deliver results.
              <br className="slide__linebreak" /> The 4-week high-impact program is offered at $10,000 with limited
              availability.
            </p>
            <button className="slide__btn btn btn_transparent" onClick={() => navigate('/booking')}>
              Try for free
            </button>
            <img src={devicesImg} alt="Devices" className="slide__image" />
          </div>
        </div>
      </section>
      <section className="why-section">
        <div className="container">
          <div className="why">
            <h2 className="why__title title">Why trading?</h2>
            <p className="why__text text">
              Learning to trade is a journey of self-discovery, financial education, and personal growth. While the path
              may be challenging, the rewards are significant. If you are willing to invest the time, effort, and
              dedication required, you will find a world of opportunities awaiting you in the market.
            </p>
          </div>
        </div>
      </section>
      <section className="opportunities-section">
        <div className="container">
          <div className="opportunities">
            <h2 className="opportunities__title">Learning to trade can empower you in multiple facets of your life</h2>
            <div className="opportunities__list">
              <div className="opportunities__item">
                <h3 className="opportunities__subtitle subtitle">Financial</h3>
                <p className="opportunities__text text">
                  When you trade effectively, you generate income, accumulate wealth, and ultimately achieve financial
                  independence. It provides an avenue to leverage capital and investments, with the potential to
                  outperform traditional forms of income.
                </p>
              </div>
              <div className="opportunities__item">
                <h3 className="opportunities__subtitle subtitle">Lifestyle</h3>
                <p className="opportunities__text text">
                  Trading provides the flexibility to tailor a lifestyle according to your preferences. The ability to
                  place and manage trades directly from your mobile phone and automate trades for execution at
                  predefined entries offers convenience and eliminates the need to sit in front of a computer.
                </p>
              </div>
              <div className="opportunities__item">
                <h3 className="opportunities__subtitle subtitle">Intellectual</h3>
                <p className="opportunities__text text">
                  Trading is an intellectual pursuit that sharpens analytical thinking and decision-making skills,
                  instilling discipline and risk management abilities. It demands continuous learning and adaptability
                  amid market challenges, reflecting dedication and resilience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pricing-section">
        <div className="container">
          <div className="pricing">
            <h2 className="pricing__title title">Pricing</h2>
            <p className="pricing__text text">
              This high-impact program is priced at $10,000 and operates on a per-lesson payment structure. It has 40
              lessons divided into 4 modules. At the beginning of each day, we will set a target and establish a daily
              time limit. During each session, you will receive an invoice via email, to be paid using{' '}
              <a className="pricing__payment">PayPal</a> or <a className="pricing__payment">Revolut</a>. After each
              payment, you will receive a receipt.
            </p>
          </div>
        </div>
      </section>
      <section className="lessons-section">
        <div className="container">
          <div className={`lessons ${showLessonsMore ? 'expanded' : ''}`}>
            <h2 className="lessons__title title">The lessons</h2>
            <p className="lessons__text text">
              Trading is an incremental learning process, where each segment builds upon the last. Each lesson is
              structured to ensure a clear and guided learning path, securing a solid understanding of the content.
            </p>
            <ShowMoreLess showMore={showLessonsMore} setShowMore={setShowLessonsMore} />
            <ul className="lessons__list">
              <li className="lessons__item">
                <h4 className="lessons__subtitle">1. Teaching Format</h4>
                <p className="lessons__text text">Teaching occurs individually via Zoom or Teams</p>
              </li>
              <li className="lessons__item">
                <h4 className="lessons__subtitle">2. Module Structure</h4>
                <p className="lessons__text text">The program comprises 4 modules, each containing 10 lessons</p>
              </li>
              <li className="lessons__item">
                <h4 className="lessons__subtitle">3. Lesson Content</h4>
                <p className="lessons__text text">
                  Each lesson covers 1-3 topics based on material complexity and comprehension
                </p>
              </li>
              <li className="lessons__item">
                <h4 className="lessons__subtitle">4. Lesson Sequence</h4>
                <p className="lessons__text text">
                  The lesson begins with outlining objectives for clear learning goals
                  <br />
                  Systematic navigation through material using visual aids like illustrations or charts
                  <br />
                  Recap of key points and their significance
                  <br />A Q&A session concludes the lesson
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="learning-section">
        <div className="container">
          <div className={`learning ${showLearningMore ? 'expanded' : ''}`}>
            <h2 className="learning__title title">Learning to trade</h2>
            <p className="learning__text text">
              Starting as a new trader presents challenges with information overload and selecting the right learning
              path. This personalized, high-impact program filters the noise, helps you avoid mistakes that cost both
              time and money, and accelerates your journey toward profitable trading.
            </p>
            <ShowMoreLess showMore={showLearningMore} setShowMore={setShowLearningMore} />
            <div className="learning__info">
              <h3 className="learning__subtitle subtitle">The challenge</h3>
              <p className="learning__text text">
                The reason it is so hard starting out as a new trader is that there is just so much noise. And as a
                beginner you do not have the skill to know what to filter out and what to listen to. You do not know
                what is right and what is wrong and are getting different opinions from all angles. Between YouTube,
                Instagram, forums, books - the amount of trading information is endless. But how much of it is
                trustworthy? Without experience, it is nearly impossible to identify quality advice from empty promises.
                Some of the advice might even come with good intentions, but are just plain wrong. And so, it is very
                hard to get through this phase and chose a learning path where you in essence not just are wasting time
                and money.
              </p>
              <h3 className="learning__subtitle subtitle">The solution</h3>
              <p className="learning__text text">
                With 25 years of trading experience across various market conditions, I offer a personalized program
                that teach you to navigate the noise, avoid common mistakes, and develop the knowledge and skills to
                trade profitably. This comprehensive and immersive program leverages time-tested methods that
                dramatically shorten your learning curve. Slick salespeople on social media are entertaining, but real
                trading is serious business. There are no shortcuts or black box but the correct approach makes time to
                value (TTV) shorter. This program is only for those committed and willing to do the necessary work.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="journey-section">
        <div className="container">
          <div className={`journey ${showJourneyMore ? 'expanded' : ''}`}>
            <h2 className="journey__title title">The journey</h2>
            <p className="journey__text text">
              Before we start trading, before we look at a chart and well before we even implement a strategy, it is
              critical to understand what it really takes to become a consistently profitable trader. If we do not
              prepare ourselves properly, then we really are decreasing our probability for success well before we even
              click a buy or sell button. The journey of a new trader often unfolds through these five stages.
            </p>
            <ShowMoreLess showMore={showJourneyMore} setShowMore={setShowJourneyMore} />
            <div className="journey__additional">
              <img src={chart} alt="Chart" className="journey__chart" />
              <ul className="journey__stages">
                <li className="journey__stage">
                  <h3 className="journey__subtitle subtitle">1. Uninformed Optimism</h3>
                  <p className="journey__text text">
                    The novice trader begins with enthusiasm and optimism but lacks an informed understanding of the
                    challenges in trading. At this naive stage, profits seem easy to achieve, and confidence is at its
                    peak.
                  </p>
                </li>
                <li className="journey__stage">
                  <h3 className="journey__subtitle subtitle">2. Informed Pessimism</h3>
                  <p className="journey__text text">
                    After experiencing inevitable setbacks and losses from initial trades, optimism gives way to
                    pessimism as the trader gains a more realistic perspective through firsthand experience. The
                    difficulty of sustaining profits is now fully appreciated.
                  </p>
                </li>
                <li className="journey__stage">
                  <h3 className="journey__subtitle subtitle">3. Determination vs. Resignation</h3>
                  <p className="journey__text text">
                    Faced with informed pessimism, the trader reaches a crossroad and must decide between:
                  </p>
                  <ul className="journey__list">
                    <li className="text">
                      a) Determination to gain competence through dedicated education and practice.
                    </li>
                    <li className="text">b) Resignation that consistent success may be out of reach.</li>
                  </ul>
                </li>
                <li className="journey__stage">
                  <h3 className="journey__subtitle subtitle">4. Hopeful Realism</h3>
                  <p className="journey__text text">
                    By persevering through losses and dedicated effort, the determined trader acquires skills and
                    develop a realistic perspective devoid of overconfidence and pessimism. Hope is grounded in data,
                    not mere wishes.
                  </p>
                </li>
                <li className="journey__stage">
                  <h3 className="journey__subtitle subtitle">5. Informed Optimism</h3>
                  <p className="journey__text text">
                    With screen time and success, informed optimism takes hold as competence is demonstrated over time,
                    not assumed baselessly as in Stage 1. Confidence aligns with empirical performance.
                  </p>
                </li>
              </ul>
              <ul className="journey__components">
                <li className={`journey__component ${showEducationMore ? 'expanded-item' : ''}`}>
                  <div className="journey__line" onClick={() => setShowEducationMore((state) => !state)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M20 12H4" stroke="#8CE4F8" strokeLinecap="round" />
                      <path
                        className={showEducationMore ? 'plus-line_hidden' : 'plus-line'}
                        d="M12 4V20"
                        stroke="#8CE4F8"
                        strokeLinecap="round"
                      />
                    </svg>
                    <h3 className="journey__subtitle subtitle">Education</h3>
                  </div>
                  <div className="journey__additional-info">
                    <p className="journey__text text">
                      This is where the journey should start but unfortunately for many, where it ends as well. Many say
                      that education is the answer when it comes to successful trading however this is really why most
                      people lose money and fail because most financial education is either very flawed or intentionally
                      misleading.
                    </p>
                    <p className="journey__text text">
                      Proper education is the answer and without it, we are likely to quickly find ourself time and time
                      again on the wrong side of the market. Many new traders forget that trading is a skill which needs
                      to be honed and developed. It is a profession that requires superior skill and understanding as it
                      is competition at its finest. Much like a doctor train at medical school or a lawyer at law
                      school, successful traders have also been trained and educated in a very similar fashion. To learn
                      how to do a job well, one needs to be instructed by someone who is already doing that job and who
                      can do it effectively. However, many hopefuls decide early on in their trading to skip the
                      education process and jump right in, good luck. Let me then ask: What are the chances of this
                      working? If trading was as easy as just diving in with very little understanding or guidance from
                      a professional, then everyone would be doing it and making money.
                    </p>
                    <p className="journey__text text">
                      Trading is extreme competition. Each and every time we place a trade, there is someone on the
                      other side of that trade trying to take our money. The trader who is more informed, properly
                      educated in the profession of trading is going to come out ahead. The stark reality, though, is
                      that the vast majority of traders end up failing. The facts do not lie, yet many choose to ignore
                      this prospect and think that things will be different for them. The alluring thing about the
                      market is that it tempts the newcomer with dreams of easy money and wealth, and with humans being
                      the emotional creatures we are, these temptations usually end in frustration. One of the many
                      pitfalls of trading is that it is easily accessible and anyone can go online and open an account
                      in a matter of minutes. Does this mean that this is the right route? It is almost like believing
                      anyone could perform open-heart surgery after reading a book about it...not likely.
                    </p>
                    <p className="journey__text text">
                      It is critical for every new trader to fully understand the disciplines required and more
                      importantly, why they are required, right at the very start. Let us now look at the three other
                      key areas to focus on.
                    </p>
                  </div>
                </li>
                <li className={`journey__component ${showDisciplineMore ? 'expanded-item' : ''}`}>
                  <div className="journey__line" onClick={() => setShowDisciplineMore((state) => !state)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M20 12H4" stroke="#8CE4F8" strokeLinecap="round" />
                      <path
                        className={showDisciplineMore ? 'plus-line_hidden' : 'plus-line'}
                        d="M12 4V20"
                        stroke="#8CE4F8"
                        strokeLinecap="round"
                      />
                    </svg>
                    <h3 className="journey__subtitle subtitle">Discipline</h3>
                  </div>
                  <div className="journey__additional-info">
                    <p className="journey__text text">
                      One of the many traps new traders fall into is changing a solid strategy for the wrong reasons.
                      Sometimes, when a new trader finds success with some consistent winning trades early on,
                      everything is great. Then, he fails one or twice, leading him to then abandon the strategy in
                      search of another with higher rate of success. This is a dangerous approach, as it can lead to a
                      game of holy-grail chasing which often ends with failure. If we can have the discipline to accept
                      that no one strategy will have 100% winning trades and stick to our rules over a sustained period
                      of time to ascertain the strategies real potential, then and only then will we have a chance at
                      success. After all, following a set of rules should not be that hard yet this is a challenge and
                      potential pitfall for new traders.
                    </p>
                    <p className="journey__text text">
                      One of the many traps new traders fall into is changing a solid strategy for the wrong reasons.
                      Sometimes, when a new trader finds success with some consistent winning trades early on,
                      everything is great. Then, he fails one or twice, leading him to then abandon the strategy in
                      search of another with higher rate of success. This is a dangerous approach, as it can lead to a
                      game of holy-grail chasing which often ends with failure. If we can have the discipline to accept
                      that no one strategy will have 100% winning trades and stick to our rules over a sustained period
                      of time to ascertain the strategies real potential, then and only then will we have a chance at
                      success. After all, following a set of rules should not be that hard yet this is a challenge and
                      potential pitfall for new traders.
                    </p>
                  </div>
                </li>
                <li className={`journey__component ${showPatienceMore ? 'expanded-item' : ''}`}>
                  <div className="journey__line" onClick={() => setShowPatienceMore((state) => !state)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M20 12H4" stroke="#8CE4F8" strokeLinecap="round" />
                      <path
                        className={showPatienceMore ? 'plus-line_hidden' : 'plus-line'}
                        d="M12 4V20"
                        stroke="#8CE4F8"
                        strokeLinecap="round"
                      />
                    </svg>
                    <h3 className="journey__subtitle subtitle">Patience</h3>
                  </div>
                  <div className="journey__additional-info">
                    <p className="journey__text text">
                      It would be great if proper education and discipline were enough but it is not. Patience is a key
                      piece to the trading puzzle and it comes in three forms.
                    </p>
                    <p className="journey__text text">
                      First, to have the patience to let the market come to us. Meaning, our rule-based strategy
                      identifies the low risk, high reward, and high probability trading opportunities in the market. It
                      tells us exactly at what price to enter and exit the market. So, we will find our self waiting for
                      market prices to come to our key entry and exit prices and that can often take time. People in
                      general like to be doing things, taking action, not waiting. This is in direct conflict with
                      success in trading. We must have the patience to wait for market prices to come to our
                      predetermined entry and exit points.
                    </p>
                    <p className="journey__text text">
                      Second, once in a trade, we must have the patience to let the trade work out as planned, win or
                      lose. Many times, new traders enter a trade as planned, only to cut the profit short and/or remove
                      a stop-loss order because they did not want to take a loss! This is account suicide.
                    </p>
                    <p className="journey__text text">
                      Third, have the patience to let our newly learned skill turn into a profitable trading career.
                      Many make the mistake of being a little too eager to pull the trigger and end up clicking buttons
                      a bit too often. They think that just because they have some education, they have the ability to
                      immediately start making money right away. Be realistic with a new skill. It is very much like
                      taking the driving test: the minute you pass does not mean you are ready to drive a Ferrari.
                    </p>
                  </div>
                </li>
                <li className={`journey__component ${showStrategyMore ? 'expanded-item' : ''}`}>
                  <div className="journey__line" onClick={() => setShowStrategyMore((state) => !state)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M20 12H4" stroke="#8CE4F8" strokeLinecap="round" />
                      <path
                        className={showStrategyMore ? 'plus-line_hidden' : 'plus-line'}
                        d="M12 4V20"
                        stroke="#8CE4F8"
                        strokeLinecap="round"
                      />
                    </svg>
                    <h3 className="journey__subtitle subtitle">Strategy</h3>
                  </div>
                  <div className="journey__additional-info">
                    <p className="journey__text text">
                      Truth is, there are not many ways to make money in the markets. We buy low and sell high, period.
                      This means having a strategy that helps identify market turns and market moves in advance, with a
                      very high degree of accuracy. Knowing that the only thing that causes market prices to turn and
                      move is significant demand and supply, hence our strategy must do a very good job of objectively
                      quantifying demand and supply. This is the foundation of our strategy. Knowing what the picture of
                      real institutional demand and supply looks like on a price chart is key. Whether we look at price
                      and price alone or conventional technical analysis, real market supply and demand needs to be the
                      foundation of the strategy. That is why we have very specific rules for this which will allow us
                      to have our entries and exits 100% rule based.
                    </p>
                    <p className="journey__text text">
                      Not understanding any of these four key items or dismiss them as not important severely reduces
                      the chances for success. Think of the skill to fly an aircraft and the discipline needed to follow
                      our plan. We first go to flight school to learn the theory and rules and then practice and build
                      the skill with an experienced pilot. This takes time and the highest amount of discipline as
                      following rules is a matter of life and death. While losing money in the market is not life or
                      death, the key personal traits needed trading in markets is not all that different from those
                      needed to fly.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="success-section">
        <div className="container">
          <div className={`success ${showSuccessMore ? 'expanded' : ''}`}>
            <h2 className="success__title title">Success</h2>
            <p className="success__text text">
              To be successful in the financial markets you need two things; knowledge (based on the previously
              described 4 areas of focus) and capital. The issue is that most lose their capital before they gain the
              necessary knowledge to be successful.
            </p>
            <ShowMoreLess showMore={showSuccessMore} setShowMore={setShowSuccessMore} />
            <div className="success__info">
              <p className="success__text text">
                There is an old saying that in trading there are only two rules, the first is to not lose money and the
                second is to not forget rule number one. It is however impossible not to lose some money as no-one has a
                crystal bowl and losses are essentially a cost of doing business, the key then is to keep the losses
                small. This is done through a predefined risk-reward ratio which limits how much you risk on each trade
                in order to protect your capital when the trade does not work out in your favour.
              </p>
              <p className="success__text text">
                After my 25 years in the markets (and still standing) I have found trading to be a mix of common sense,
                human psychology and a dash of art. It requires time, discipline, a plan and an basic understanding of
                human psychology and game theory. Make sure to spend enough time on each side of the trade, both before
                and after. Before, through proper filtering and analysis and scoring each trade probability through the
                system you will learn. Only trade the trades that has a high enough probability to be profitable. Use
                automation to keep your own psychology of fear and greed out of it. And after, log and review it and
                make sure you learn something from each trade. Trading is learned in increments, so the target is to
                spend enough time on each trade to build a deeper understanding of the forces at play. You will learn
                how psychology plays an intricate part in trading. If you win, your greed kicks in, you feel fantastic,
                and take bigger risks to win more faster until the next trade works against you. If you lose, you want
                to take revenge and take bigger risks to regain what you lost until.. (yes, you guessed it) the next
                trade works against you.
              </p>
              <p className="success__text text">
                A thing to understand is that trading in reality is a game where everyone plays against everyone else.
                If your broker recommends you to buy a certain stock it is because he has inventory of it or gets a
                larger commission to sell that specific stock. And if he recommends you to sell, it is because he knows
                he can sell it someone else for a higher price. In the last years YouTube is full of self-exclaimed
                tubers who talk about certain stocks or sectors like they are qualified experts when in reality most of
                them have less than $ 1,000 invested in it themselves.
              </p>
              <p className="success__text text">
                Another imminent danger is to analyse to a point where common sense disappears. An interesting read on
                this is the first know market bubble, the tulip mania in the Netherlands in 1634 to 1637.
              </p>
              <p className="success__text text">
                When learning to fly it is required to memorize emergency checklists and the first thing on the
                checklist for “In air engine failure” is actually to “fly the airplane”. This sounds almost stupid, but
                the reality is that many lives have been lost due to pilots becoming too focused on the instruments
                inside cockpit and not to navigate the plane to a safe place to land. Trading is a game of longevity.
                Follow the principles you will learn here and you will stay alive and gradually accumulate both
                knowledge and capital.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="talk-section">
        <div className="container">
          <div className="talk">
            <h2 className="talk__title title">Interested? Let’s talk</h2>
            <p className="talk__text text">
              The objective of the introductory call is to have a quick meet-and-greet, assess compatibility, and talk
              about backgrounds, motivations, and what to expect moving forward.
            </p>
            <button className="talk__btn btn btn_transparent" onClick={() => navigate('/booking')}>
              Try for free
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
