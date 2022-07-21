import PropTypes from 'prop-types';
import s from './Statistics.module.css'

const Statistics = ({good, neutral, bad, total, positivePercentage})=> {
 
    return (
        <div className={s.container}>
            <ul>
                <li className={s.text} >Good:
                    <span className={s.textValue}>{good}</span>          
                </li>
                <li className={s.text} >Neutral:
                    <span className={s.textValue}>{neutral}</span>          
                </li>
                <li className={s.text} >Bad:
                    <span className={s.textValue}>{bad}</span>          
                </li>
                <li className={s.text} >Total:
                    <span className={s.textValue}>{total}</span>          
                </li>
                <li className={s.text} >Posutive feedback:
                    <span className={s.textValue}>{positivePercentage}%</span>          
                </li>
            </ul>         
        </div>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}

export default Statistics;