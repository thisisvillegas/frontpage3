import React, {Component} from 'react';

const CreateLists2 = props => {
    // console.log('props', props);
    if (props.data) {
        return (
            <tr>
                <td>
                    <ul>
                        <li>
                            {props.data.list1.link1 ? (
                                <a href={props.data.list1.link1.url}>
                                    {props.data.list1.link1.name}
                                </a>
                            ) : null}
                        </li>
                        <li>
                            {props.data.list1.link2 ? (
                                <a href={props.data.list1.link2.url}>
                                    {props.data.list1.link2.name}
                                </a>
                            ) : null}
                        </li>
                        <li>
                            {props.data.list1.link3 ? (
                                <a href={props.data.list1.link3.url}>
                                    {props.data.list1.link3.name}
                                </a>
                            ) : null}
                        </li>
                        <li>
                            {props.data.list1.link4 ? (
                                <a href={props.data.list1.link4.url}>
                                    {props.data.list1.link4.name}
                                </a>
                            ) : null}
                        </li>
                        <li>
                            {props.data.list1.link5 ? (
                                <a href={props.data.list1.link5.url}>
                                    {props.data.list1.link5.name}
                                </a>
                            ) : null}
                        </li>
                        <li>
                            {props.data.list1.link6 ? (
                                <a href={props.data.list1.link6.url}>
                                    {props.data.list1.link6.name}
                                </a>
                            ) : null}
                        </li>
                        <li>
                            {props.data.list1.link7 ? (
                                <a href={props.data.list1.link7.url}>
                                    {props.data.list1.link7.name}
                                </a>
                            ) : null}
                        </li>
                    </ul>
                </td>
                {props.data.list2 ? (
                    <td>
                        <ul>
                            <li>
                                {props.data.list2.link1 ? (
                                    <a href={props.data.list2.link1.url}>
                                        {props.data.list2.link1.name}
                                    </a>
                                ) : null}
                            </li>
                            <li>
                                {props.data.list2.link2 ? (
                                    <a href={props.data.list2.link2.url}>
                                        {props.data.list2.link2.name}
                                    </a>
                                ) : null}
                            </li>
                            <li>
                                {props.data.list2.link3 ? (
                                    <a href={props.data.list2.link3.url}>
                                        {props.data.list2.link3.name}
                                    </a>
                                ) : null}
                            </li>
                            <li>
                                {props.data.list2.link4 ? (
                                    <a href={props.data.list2.link4.url}>
                                        {props.data.list2.link4.name}
                                    </a>
                                ) : null}
                            </li>
                            <li>
                                {props.data.list2.link5 ? (
                                    <a href={props.data.list2.link5.url}>
                                        {props.data.list2.link5.name}
                                    </a>
                                ) : null}
                            </li>
                            <li>
                                {props.data.list2.link6 ? (
                                    <a href={props.data.list2.link6.url}>
                                        {props.data.list2.link6.name}
                                    </a>
                                ) : null}
                            </li>
                            <li>
                                {props.data.list2.link7 ? (
                                    <a href={props.data.list2.link7.url}>
                                        {props.data.list2.link7.name}
                                    </a>
                                ) : null}
                            </li>
                        </ul>
                    </td>
                ) : null}
                {props.data.list3 ? (
                    <td>
                        <ul>
                            <li>
                                {props.data.list3.link1 ? (
                                    <a href={props.data.list3.link1.url}>
                                        {props.data.list3.link1.name}
                                    </a>
                                ) : null}
                            </li>
                            <li>
                                {props.data.list3.link2 ? (
                                    <a href={props.data.list3.link2.url}>
                                        {props.data.list3.link2.name}
                                    </a>
                                ) : null}
                            </li>
                            <li>
                                {props.data.list3.link3 ? (
                                    <a href={props.data.list3.link3.url}>
                                        {props.data.list3.link3.name}
                                    </a>
                                ) : null}
                            </li>
                            <li>
                                {props.data.list3.link4 ? (
                                    <a href={props.data.list3.link4.url}>
                                        {props.data.list3.link4.name}
                                    </a>
                                ) : null}
                            </li>
                            <li>
                                {props.data.list3.link5 ? (
                                    <a href={props.data.list3.link5.url}>
                                        {props.data.list3.link5.name}
                                    </a>
                                ) : null}
                            </li>
                            <li>
                                {props.data.list3.link6 ? (
                                    <a href={props.data.list3.link6.url}>
                                        {props.data.list3.link6.name}
                                    </a>
                                ) : null}
                            </li>
                            <li>
                                {props.data.list3.link7 ? (
                                    <a href={props.data.list3.link7.url}>
                                        {props.data.list3.link7.name}
                                    </a>
                                ) : null}
                            </li>
                        </ul>
                    </td>
                ) : null}
                {props.data.list4 ? (
                    <td>
                        <ul>
                            <li>
                                {props.data.list4.link1 ? (
                                    <a href={props.data.list4.link1.url}>
                                        {props.data.list4.link1.name}
                                    </a>
                                ) : null}
                            </li>
                            <li>
                                {props.data.list4.link2 ? (
                                    <a href={props.data.list4.link2.url}>
                                        {props.data.list4.link2.name}
                                    </a>
                                ) : null}
                            </li>
                            <li>
                                {props.data.list4.link3 ? (
                                    <a href={props.data.list4.link3.url}>
                                        {props.data.list4.link3.name}
                                    </a>
                                ) : null}
                            </li>
                            <li>
                                {props.data.list4.link4 ? (
                                    <a href={props.data.list4.link4.url}>
                                        {props.data.list4.link4.name}
                                    </a>
                                ) : null}
                            </li>
                            <li>
                                {props.data.list4.link5 ? (
                                    <a href={props.data.list4.link5.url}>
                                        {props.data.list4.link5.name}
                                    </a>
                                ) : null}
                            </li>
                            <li>
                                {props.data.list4.link6 ? (
                                    <a href={props.data.list4.link6.url}>
                                        {props.data.list4.link6.name}
                                    </a>
                                ) : null}
                            </li>
                            <li>
                                {props.data.list4.link7 ? (
                                    <a href={props.data.list4.link7.url}>
                                        {props.data.list4.link7.name}
                                    </a>
                                ) : null}
                            </li>
                        </ul>
                    </td>
                ) : null}
            </tr>
        );
    } else {
        return (
            <tr>
                <td>
                    <ul>{console.log('shit out of luck')}</ul>
                </td>
            </tr>
        );
    }
};

export default class Table extends Component {
    render() {
        // console.log('this.props.list1', this.props);
        return (
            <table align="center">
                <tbody>
                    <CreateLists2 data={this.props.payload} />
                </tbody>
            </table>
        );
    }
}
