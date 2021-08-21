import React from 'react';
import {useParams} from 'react-router-dom';

function OneTopic(props) {
    let {id} = useParams();
    let selectedTopic = {
        key: null,
        id: null,
        title: 'Sorry',
        description: "I can't find that",
    };

    props.topicList.forEach(curr => {
        if (curr.id === id) {
            selectedTopic.key = curr.key;
            selectedTopic.id = curr.id;
            selectedTopic.title = curr.title;
            selectedTopic.description = curr.description;

            return false;
        }
    });

    return (
        <div>
            <title>{selectedTopic.title}</title>
            <p>{selectedTopic.description}</p>
        </div>
    );
}

export default OneTopic;
