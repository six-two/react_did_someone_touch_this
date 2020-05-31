import React from 'react';
import { connect } from 'react-redux';
import { compare } from 'resemblejs';
import { State as ReduxState, ImageState, ImageData } from './redux/store';
import { goToStep, completedCurrentStep } from './redux/actions';
import { STEPS, StepData } from './steps/Steps';


interface Props {
  lastSelectableStep: number,
  currentStep: number,
  goToStep: (index: number) => void,
  completeStep: () => void,
}

class StepDisplay extends React.Component<Props> {
  render() {
    return (
      <div className="steps">
        <ul>
          {STEPS.map(this.renderStep)}
        </ul>
      </div>
    );
  }

  renderStep = (step: StepData) => {
    let classes = ["step"];
    let onClick;
    if (step.number <= this.props.lastSelectableStep) {
      if (step.number === this.props.currentStep) {
        classes.push("selected");
      } else {
        classes.push("selectable");
        onClick = () => this.props.goToStep(step.number);
      }
    } else {
      classes.push("disabled");
    }
    return <li className={classes.join(" ")} key={step.number} onClick={onClick}>
      {step.name}
    </li>;
  }
}

const mapStateToProps = (state: ReduxState, ownProps: any) => {
  return {
    ...ownProps,
    lastSelectableStep: state.steps.completed,
    currentStep: state.steps.current,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    goToStep: (index: number) => dispatch(goToStep(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StepDisplay);
