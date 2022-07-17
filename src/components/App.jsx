import { useState } from "react";
import Section from "./Section";
import Notification from './Notification'
import FeedbackOptions from "./FeedbackOptions";
import Statistics  from "./Statistics";


export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackState = { good, neutral, bad };

  const handleOnClick = key => {
    switch (key) {
      case 'good':
        setGood(preGood => preGood + 1);
        break;
      case 'neutral':
        setNeutral(preNeutral => preNeutral + 1);
        break;
      case 'bad':
        setBad(preBad => preBad +1);
        break;
      default:
        return;
    };  
  };

  const total = Object.values(feedbackState).reduce(
    (sum, current) => sum + current, 0);
  const countPositiveFeedbackPercentage = Math.round(good * 100 / total);
  const optionsName = Object.keys(feedbackState);
  const optionsStatistics = Object.values(feedbackState);

  return (
        <div>
          <Section
            title="Please leave feedback">
            <FeedbackOptions
              options={optionsName}
              onLeaveFeedback={handleOnClick}
            /> 
          </Section>

          <Section title="Statistics">
            {total !== 0 ? <Statistics
              name={optionsName}
              options={optionsStatistics}
              total={total}
              positivePercentage={countPositiveFeedbackPercentage}
            /> : <Notification
              message="There is no feedback" />
            }
          </Section>
        </div>
      )
}

