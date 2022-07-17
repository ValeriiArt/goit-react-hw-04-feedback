import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'
import s from './Statistics.module.css'

const Statistics = ({name, options, total, positivePercentage})=> {

    return (

        <div className={s.container}>
            <div>
                <p className={s.text} >
                {name.map(name => (
                            <span key={nanoid(4)} className={s.textValue}>{name}:</span> 
                        ))} 
                </p>
            </div>
            <div>
                <p className={s.text}>
                    {options.map(value => (
                        <span key={ nanoid(4)} className={s.textValue}>{value}</span>
                            ))}
                </p>
            </div>
            
            <div className={s.totalStatistics}>
                <p className={s.totalText}>
                    Total:
                    <span >{total}</span>
                </p>
                <p className={s.totalText}>
                    Posutive feedback:
                    <span >{positivePercentage}%</span>
                </p>

            </div>
            
        </div>
    );
};

Statistics.propTypes = {
    name: PropTypes.array.isRequired,
    options: PropTypes.array.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}

export default Statistics;