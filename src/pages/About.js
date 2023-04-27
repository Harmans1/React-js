import styles from '../css/About.module.css'
import png from '../assets/about.png'
function About() {
    return (
        <div className={styles.flex}>
            <div className={styles.container}>
                <h1 className={styles.title}>About <span className={styles.me}>me</span></h1>
                <p className={styles.desc}>Hello! My name is Harmanpreet singh, and I am a MERN stack developer with [number] years of experience. My passion for web development started 4 months ago when I built my first website, and I haven't looked back since.<br />

                    As a MERN stack developer, I am skilled in working with MongoDB, Express.js, React.js, and Node.js to build scalable and efficient web applications. I enjoy using my problem-solving skills to tackle complex coding challenges and finding elegant solutions that improve user experience.
                    <br />

                    In addition to my technical skills, I am a strong collaborator and communicator. I believe that clear communication is essential to the success of any project, and I enjoy working closely with my team to ensure that everyone is on the same page.
                    <br />
                    When I'm not coding, you can find me scrolling youtube and instagram, or volunteering with insert organization or cause. Thank you for taking the time to learn a little bit about me, and I look forward to the opportunity to work together on your next project.</p>
            </div>
           <div><img src={png}  className={styles.png}/> </div> 
        </div>
    )
}
export default About;