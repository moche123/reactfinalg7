/* eslint-disable prettier/prettier */
import { useDispatch, useSelector } from 'react-redux';
import { skills } from '../../sources';
import './Work.css'
import { clearVotes, voteSkill,clearOneVote } from '../../portfolio/votationSlice';

const Work = () => {
   const dispatch = useDispatch();
   const vots = useSelector( voteSkill )

  return (
    <div className='work-section'>
      <h3>My skills</h3>
      <br />
      <button className='button-clear' onClick={ ()=> dispatch(clearVotes()) }>CLEAR</button>
      <br /><br /><br /><br /><br />
      

      <div className='container-skill'>
        {
          skills.map((skill:any)=> {
            return (
              <div key={skill.id}>
                <div className='skill-item'>{skill.tool}</div>
                <div className='container-img'>
                  <img className='img-skill' src={skill.icon} alt="icon of skill" />
                </div>
                <div>
                  votes: {vots.payload.votation.skills[skill.id].count}
                </div>
                <div className="buttons">
                  <button onClick={() => dispatch(voteSkill( skill.id ))} className="button-vote">
                    VOTE!
                  </button>
                  <button onClick={() => dispatch(clearOneVote( skill.id ))} className="button-clear-individual">
                    CLEAR ONLY
                  </button>

                </div> 
              </div>

            )
          })
        }
      </div>

    </div>
  )
}

export default Work