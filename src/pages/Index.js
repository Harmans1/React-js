import style from '../css/Home.module.css'
import png from '../assets/home.png'

function Index(){
    return (
        <div className={style.flex}>

      
        <div className={style.container}>
        <h1 className={style.title}>Hey! I'm <span className={style.name}> Harman </span></h1>
        <h2 className={style.title2}>I am a Full stack developer (MERN)</h2>
        <p className={style.para}>"I'm a full stack developer who's passionate about creating elegant, user-friendly web applications that solve real-world problems. Whether it's building RESTful APIs. I'm always striving for excellence in every aspect of my work."</p>
        </div>
        <img src={png} className={style.png} />
        </div>
    )
    }
    export default Index;