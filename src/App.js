//import './App.css';
import React, { useState } from 'react';

import Container from './components/container/Container';
import Statistics from './components/statistics/Statistics';
import FeedbackOptions from './components/feedbackOptions/FeedbackOptions';
import Section from './components/section/Section';

const options = ['good', 'neutral', 'bad'];

export default function App() {
  const [good, setGoodFeedback] = useState(0);
  const [neutral, setNeutralFeedback] = useState(0);
  const [bad, setBadFeedback] = useState(0);

  
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    let total = countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  const handleFeedback = ({ target }) => {
    const { feedback } = target.dataset;

    switch (feedback) {
      case 'good':
        setGoodFeedback(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutralFeedback(prevState => prevState + 1);
        break;

      case 'bad':
        setBadFeedback(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };


  return (
    <Container>
        <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleFeedback}
        />
        </Section>
        <Section title={'Statistics'}>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
        </Section>
     </Container>
  );
}