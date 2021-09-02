import React from  'react';

function About() {

    return (
        <>
        <div className="zigzag-bottom"></div>
            <div className="container">
                <div className="latest-product">
                        <h2 class="section-title ">About</h2>
                        
                    <div className="row">
                        <div className="col-md-8">
                            <h1>High Order Component</h1>
                            <p>
                            A higher-order component (HOC) is an advanced technique in React for reusing component logic. 
                            HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.
                            </p>         
                            <p>
                                A higher-order component is a function that takes a component and returns a new component.
                            </p> 
                        </div>   
                        <div className="col-md-4">
                            <img className="" src="assets/img/HOC.PNG" alt="HOC Image" />
                        </div>
                    </div>
                </div>
            </div> 
        {/*End brands area*/}
        </>
    );
}

export default About;