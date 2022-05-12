import { Col } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import '../styles/articlepost.css'
export default function ArticlePost(){
    return(
        <>
            {/* <div>
                <h1>Frequently Asked Questions </h1>
            </div> */}

            <Container className='mt-5'>
                <h1>Frequently Asked Questions </h1>
                <Row >
                    <Col xs={8} >
                        <h3>Why is it important to learn to code?</h3>
                        <p>There are many reasons why learning to code is important. Coding can help you think analytically and solve problems more effectively. It can also be used to automate tasks that would otherwise be tedious or time-consuming. In addition, coding is a great way to express your creativity. And as you learn more and become more experienced, you will only be limited by your imagination.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={8}>
                        <h3>How long does it take to learn to code?</h3>
                        <p>That depends on your level of experience and commitment. For someone with no prior experience, it could take anywhere from a few weeks to a few months to learn the basics of coding. However, if you’re already familiar with basic programming concepts, you can learn to code more quickly. And if you’re dedicated to learning and practicing regularly, you can become proficient in a shorter amount of time.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={8}>
                        <h3>Is it worth learning to code in 2022?</h3>
                        <p>Yes. Development is a high-paying field, with a median salary of $93,000 in the United States. Coding is a skill that will continue to be in high demand in the future. As technology advances, the need for coders will only increase.</p>
                    </Col>
                </Row>
            </Container>

            <Container>
                <div className="share" >
                    <h3>Share This Article</h3>
                    <div className="share">
                        <a href="#" class="fa fa-facebook"></a>
                        <a href="#" class="fa fa-twitter"></a>
                        <a href="#" class="fa fa-linkedin"></a>
                        <a href="#" class="fa fa-envelope"></a>
                    </div>
                </div>

                <div className="author">
                    <img src="https://uploads.sitepoint.com/wp-content/uploads/2022/03/1646968566jf4@2x-120x120.jpg"></img>
                    <div>
                        <h3>Joel Falconer</h3>
                        <p>
                            <span>Joel Falconer</span> is the managing editor of SitePoint. In the past he's worked at The Next Web, Envato, DesignCrowd, and AppStorm.<a href="#" class="fa fa-twitter"></a>
                        </p>
                    </div>
                </div>
            </Container>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </>
    )
}