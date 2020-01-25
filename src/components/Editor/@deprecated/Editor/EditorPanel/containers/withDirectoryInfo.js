import {connect} from 'react-redux';
import selectDirChildren from './../selectors/selectDirChildren';

const mapStateToProps = (
    {template, rules},
    {dirHistory}
) => {
    const {
        isLoaded,
        root,
    } = template;

    const historyLen = dirHistory.length;

    let directory = root; 

    if (!isLoaded) {
        return {isLoaded};
    }
    
    if (historyLen > 0) {
        const {id, type} = dirHistory[historyLen - 1];
        directory = template[type][id];
    }
    
    const contentType = directory.childrenType;
    const childrenNodeType = rules.entities[contentType].nodeType;

    const content = selectDirChildren(template, directory);

    return {
        isLoaded: template.isLoaded,
        contentType,
        childrenNodeType,
        content,
    }
};

export default connect(mapStateToProps);