import { connect } from 'react-redux';
import { actionCreator } from '../../../../redux/reducers/dialogs'
import NewMessage from './NewMessage';

const mapStateToProps = (state, { IDs }) => {
    return {
        newMessageValue: state.dialogs.dialogField[IDs.targetID].newMessageValue
    }
};
const mapDispatchToProps = (dispatch, { IDs }) => {
    return {
        addMessage() {
            dispatch(actionCreator.add(IDs))
        },
        changeMessage(text) {
            dispatch(actionCreator.change(IDs, text))
        },
    }
};
const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage)

export default NewMessageContainer