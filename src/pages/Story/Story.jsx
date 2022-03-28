
import styles from './Story.module.css'
import {FiInstagram } from 'react-icons/fi'
import {FaArrowLeft } from 'react-icons/fa'
import sibblingImg from '../../images/Sibblings.jpg'
import alaynaHome01Img from '../../images/Alayna-Home-01.jpg'
import alaynaHome02Img from '../../images/Alayna-Home-02.jpg'

const Story = () => {
  return (
    <div className={`${styles.storyContainer}`}>
        <h1 className='pageTitle'>Story</h1>
      <div className={`${styles.chapter}`}>
        <h3 className={`${styles.storyText}`}>After wanting, and talking about getting a dog for a very long time, Alayna fell into our laps in February of 2021. A friend had been conspiring to find us a dog for years, regularly sending us photos and links for dogs available in the area. One day she sent us a photo of 3 little pitties, all sisters, who a friend was trying to adopt out. They were 2 years old and had just come to Brooklyn from the south.</h3>
        <img className={`${styles.storyImg}`} src={sibblingImg} alt="sibblings" />
      </div>
      <div className={`${styles.chapter}`}>
        <h3 className={`${styles.storyText}`}>On a very cold February morning, we walked over to meet “Alana”, and her sister Henny. We walked them both individually, and while we liked both of them, we were drawn to “Alana” more. Her personality was so endearing and incredibly sweet. Her timidness and slightly smaller size made us believe we could realistically accommodate her. After some consideration, we decided to do a trial run with her. Those first few days were pretty stressful. She didn’t know us and had never been away from her sisters before. That first afternoon we all just sat in the living room, staring at each other, completely unsure what to do. Slowly over time, we all got more comfortable.</h3>
        <img className={`${styles.storyImg}`} src={alaynaHome01Img} alt="home but unsure" />
      </div>
      <div className={`${styles.chapter}`}>
        <h3 className={`${styles.storyText}`}>She stayed with us for 2 weeks before we finally admitted to ourselves that she was home. In that time, she became more comfortable with us, and we fell for her hard. We changed “Alana” to “Alayna” to better reflect its pronunciation, and the rest is history. Her daily adventures and naps, it’s mostly naps, can be seen on her <a href="https://www.instagram.com/lil_velvet_fart_dragon/?hl=en" target="_blank" rel="noreferrer noopener">Instagram. <FiInstagram /></a> <FaArrowLeft /></h3>
        <img className={`${styles.storyImg}`} src={alaynaHome02Img} alt="home for good" />
      </div>
    </div>
  )
}

export default Story

