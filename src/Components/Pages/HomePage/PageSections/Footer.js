import React, { PureComponent } from 'react'
import './Style.css'

export class Footer extends PureComponent {
    render() {
        return (
            <div>
                <div className="wrapper5">
                    <img src="Assets/Footer-img.png" alt=""/>
                    <div className="footer-menu">
                        <div className="pages">
                            <h4>PRODUCT</h4>
                            <p>
                                Home<br/>
                                Customers <br/>
                                Contact Us <br/>
                                Blog <br/>
                                Pricing <br/>
                                Sign Up
                            </p>
                        </div>
                        
                        <div className="pages">
                            <h4>FEATURES</h4>
                            <p>
                                Schedule Online<br/>
                                Increase productivity<br/>
                                Attract customers <br/>
                                Retain customers <br/>
                            
                            </p>
                        </div>
                        <div className="pages">
                            <h4>SUPPORT</h4>
                            <p>
                                Help<br/>
                                Screen Sharing <br/>
                                Affliate Program <br/>
                                
                            </p>
                        </div>
                        <div className="pages">
                            <h4>CONTACT US</h4>
                            <p>
                                Appointy Software Inc, 16 corning<br/>
                                Ave, Suite 136 Milpitas, CA 95035 <br/>
                                Contact@appointy.com <br/>
                                Privacy policy<br/>
                               Terms of Use<br/>
                                GDPR
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
