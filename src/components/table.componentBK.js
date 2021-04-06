import React from 'react';

const Table = props => {
    console.log('props.data', props.data);
    return (
        <table align="center">
            <tbody>
                {
                    <tr>
                        <td>
                            <ul>
                                {/* <li>{allLists.forEach(element => {})};</li> */}
                            </ul>
                        </td>
                    </tr>
                }
            </tbody>
        </table>

        // <table align="center">
        //     <tbody>
        //         <tr>
        //             <td>
        //                 <ul>
        //                     <li>
        //                         <a href="https://www.facebook.com">Facebook</a>
        //                     </li>
        //                     <li>
        //                         <a href="https://old.reddit.com">Reddit</a>
        //                     </li>
        //                     <li>
        //                         <a href="https://gmail.com">eMail</a>
        //                     </li>
        //                     <li>
        //                         <a href="https://www.google.com/calendar">
        //                             Calendar
        //                         </a>
        //                     </li>
        //                     <li>
        //                         <a href="https://netflix.com">Netflix</a>
        //                     </li>
        //                     <li>
        //                         <a href="https://play.hbogo.com/?camp=GoS7">
        //                             HBO
        //                         </a>
        //                     </li>
        //                     <li>
        //                         <a href="https://tv.xfinity.com">Xfinity</a>
        //                     </li>
        //                     <li>
        //                         <a href="https://www.amazon.com/Amazon-Video/b/?&amp;node=2858778011">
        //                             Amazon Video
        //                         </a>
        //                     </li>
        //                     <li>
        //                         <a href="https://www.Hulu.com">HULU</a>
        //                     </li>
        //                     <li></li>
        //                     <li></li>
        //                 </ul>
        //             </td>
        //             <td>
        //                 <ul>
        //                     <li>
        //                         <a href="https://www.wellsfargo.com/">
        //                             Wells Fargo
        //                         </a>
        //                     </li>
        //                     <li>
        //                         <a href="https://www.capitalone.com/">
        //                             Capital One
        //                         </a>
        //                     </li>
        //                     <li>
        //                         <a href="https://www.americanexpress.com/?inav=NavLogo">
        //                             AMEX
        //                         </a>
        //                     </li>
        //                     <li>
        //                         <a href="https://www.ufcu.org/">UFCU</a>
        //                     </li>
        //                     <li>
        //                         <a href="https://www.paypal.com/">PayPal</a>
        //                     </li>
        //                 </ul>
        //             </td>

        //             <td>
        //                 <ul>
        //                     <li>
        //                         <a href="http://www.codecademy.com/thisisvillegas">
        //                             Codecademy
        //                         </a>
        //                     </li>
        //                     <li>
        //                         <a href="http://www.lynda.com/">Lynda</a>
        //                     </li>
        //                     <li>
        //                         <a href="http://github.com/thisisvillegas">
        //                             GitHub
        //                         </a>
        //                     </li>
        //                     <li>
        //                         <a href="https://www.w3schools.com/js/">
        //                             HTMLW3
        //                         </a>
        //                     </li>
        //                     <li>
        //                         <a href="http://www.digitalocean.com">
        //                             Digital Ocean
        //                         </a>
        //                     </li>
        //                     <li>
        //                         <a href="https://docs.google.com/spreadsheets/d/17kKM0AFeqBoNYm-jINxgeWmyw-dHVm8aexAAUj4HEQE/edit#gid=2116717987">
        //                             2018 Payment Schedule
        //                         </a>
        //                     </li>
        //                 </ul>
        //             </td>
        //             <td>
        //                 <ul>
        //                     <li>
        //                         <a href="https://coautilities.com/">
        //                             Austin Util
        //                         </a>
        //                     </li>
        //                     <li>
        //                         <a href="https://www.texasgasservice.com">
        //                             TexasGas
        //                         </a>
        //                     </li>
        //                     <li>
        //                         <a href="http://www.progressive.com/">
        //                             Progressive
        //                         </a>
        //                     </li>
        //                     <li>
        //                         <a href="https://www.spectrum.net/login/">
        //                             Spectrum
        //                         </a>
        //                     </li>
        //                     <li>
        //                         <a href="https://www.att.com/my/#/login">
        //                             mobileDevice
        //                         </a>
        //                     </li>
        //                     <li>
        //                         <a href="https://regencyparkapts.securecafe.com/residentservices/regency-park-apartments-0/userlogin.aspx">
        //                             Regency Park
        //                         </a>
        //                     </li>
        //                 </ul>
        //             </td>
        //         </tr>
        //     </tbody>
        // </table>
    );
};

export default Table;
