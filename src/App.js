import React, {useState} from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import { v4 as uuid } from 'uuid';

moment.relativeTimeThreshold('m', 60);
moment.relativeTimeThreshold('h', 24);
moment.relativeTimeThreshold('d', 30000);

function DateTime(props) {
    return (
        <p className="date">{props.date}</p>
    )
}

function DateTimePretty(props) {
    const since = moment(props.date).fromNow();
    return (
        <DateTime date={since} />
    )
}

function Video(props) {
    return (
        <div className="video">
            <iframe title="iframe" src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <DateTimePretty date={props.date} />
        </div>
    )
}

function VideoList(props) {
    return props.list.map(item => <Video url={item.url} date={item.date} key={uuid()} />);
}

export default function App() {
    const [list] = useState([
        {
            url: 'https://rutube.ru/play/embed/cfe464c34c3ac4e16349622c3c24fce5/',
            date: moment(Date.now()).subtract(51, 'm')
        },
        {
            url: 'https://rutube.ru/play/embed/79c11723f75382f41147f26a7daedbca/',
            date: moment(Date.now()).subtract(23, 'h')
        },
        {
            url: 'https://rutube.ru/play/embed/d5f4d6b51b7858a2893808af5467fd87/',
            date: moment(Date.now()).subtract(1, 'd')
        },
        {
            url: 'https://rutube.ru/play/embed/4e3422b03e5c58fefbcf92c08b9640ca/',
            date: '2018-01-03 12:10:00'
        },
        {
            url: 'https://rutube.ru/play/embed/0cd52f6c7df82d11b75af0fee790e467/',
            date: '2018-01-01 16:17:00'
        },
        {
            url: 'https://rutube.ru/play/embed/f4a8e23d79b41050738c350d79b0e161/',
            date: '2017-12-02 05:24:00'
        },
    ]);

    return (
        <VideoList list={list} />
    );
}