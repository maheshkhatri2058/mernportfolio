import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className=" bg-slate-900 skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                <div className='rounded-full'>
                <div className="bg-slate-900  rounded-3xl py-5" >
                        <h2 className='text-center'>Skills</h2>
                        <p className='bg-slate-900 text-center'>Proficient in Java, Python, and MERN Stack development, with a strong foundation in Data Structures and Algorithms (DSA). Experienced in building scalable web applications, solving complex programming challenges, and delivering efficient, user-friendly solutions. Skilled at bridging the gap between frontend and backend development with a focus on performance and reliability..</p>
                        <Carousel responsive={responsive} infinite={true} className="bg-slate-900 owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" className='animate-pulse' />
                                <h5 className='text-center'>Web Designing</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image"  className='animate-pulse'/>
                                <h5 className='text-center'>Figma</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" className='animate-pulse'/>
                                <h5 className='text-center'>Python</h5>
                            </div>
                            <div className="item ">
                                <img src={meter1} alt="Image" className='animate-pulse' />
                                <h5 className='text-center'>DSA</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" className='animate-pulse'/>
                                <h5 className='text-center'>Java</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5 className='text-center'>MERN Stack Developer</h5>
                            </div>
                        </Carousel>
                    </div>
                     </div>
                   
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
