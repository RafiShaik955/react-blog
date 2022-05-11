export default function About(){
    return <div>
            <p><strong>React Router Application</strong></p>
            <p>Create an application in which user can view articles on 
                different topics. The application should have the following 
                links :-
            </p>
            <ul>
                <li>About</li>
                <li>Articles</li>
                <li>Categories</li>
                <li>Subscribe</li>
            </ul>
            <strong>Description:-</strong>
            <div>
                <ul>
                    <li><p><strong>About:</strong> Clicking on this link should
                        render a component which will give a brief description of the application.
                    </p></li>
                    <li><p><strong>Articles:</strong> Clicking on this link should render a component which will contain titles of different articles. Clicking on the title should display the entire article.
                    </p></li>
                    <li><p> <strong>Categories:</strong>This section contains different categories of articles. User can select any one of the categories.
                    </p></li>
                    <li><p><strong>Subscribe:</strong> This section contains a single input field and a button. The user will enter the email in the input field.
                    </p></li>
                </ul>
            </div>

            <p><strong> Footer section:- </strong></p>
            <p>There should be two buttons in the footer section, <strong>back and next.</strong> 
            By clicking on back button, previously visited component should be rendered. Next button will be used to go back to the current component.
            </p>

        </div>
}