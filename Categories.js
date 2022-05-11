import './styles/categories.css';

export default function Categories(){
    return <section>
        <div className='main'>
            <img src="https://uploads.sitepoint.com/wp-content/uploads/2022/05/1651719583bestprogramminglanguage-scaled.jpg" alt="first_image"></img>
            <div>
            <h2>Which Programming Language Should I Learn First in 2022?</h2>
                <p className='para'>Programming</p>
                <p>
                    <strong>Joel Falconer,</strong> <span>May 04</span><br></br>
                    It's hard to decide on a programming language to learn first. Here's a look at the most popular languages in 2022, and why they're worthwhile.
                </p>
            </div>
        </div>
        <div className='main'>
            <img src="https://uploads.sitepoint.com/wp-content/uploads/2022/05/1651637815cpds-scaled.jpg" alt="second_image"></img>
            <div>
            <h2>How to Create a Color Palette for Your Design System</h2>    
                <p className='para'>Design & UX</p>
                <p>
                    <strong>SitePoint Team,</strong> <span>May 03</span><br></br>
                    A color palette is one of the most important aspects of a design system. Designers can use them to create a visual hierarchy, a unified look and feel, and evoke emotions.
                </p>
            </div>
        </div>
        <div className='main'>
            <img src="https://uploads.sitepoint.com/wp-content/uploads/2022/05/1651545056webflow.jpg" alt="third_image"></img>
            <div>
            <h2>Webflow Review: Is It a Serious Option for Tech-Savvy Users?</h2>
                <p className='para'>Computing</p>
                <p>
                    <strong>Alex Walker,</strong> <span>May 02</span><br></br>
                    Find out if Webflow is a viable option for tech-savvy users who want to build custom websites. This review covers the pros and cons of using this online builder service.    
                </p>
            </div>
        </div>
    </section>
}