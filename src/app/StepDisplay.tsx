import React from 'react';
import { connect } from 'react-redux';
import { ReduxState } from './redux/store';
import { goToStep } from './redux/actions';
import { StepData } from './steps/Steps';


interface Props {
  lastSelectableStep: number,
  currentStep: number,
  stepList: StepData[],
}

class StepDisplay extends React.Component<Props> {
  render() {
    const step = this.props.currentStep;
    return <div className="step-header">
      <ul className="list">
        {this.props.stepList.map(this.renderStep)}
      </ul>
      <div className="buttons">
        {this.goToStepButton("Previous", step - 1)}
        {this.goToStepButton("Next", step + 1)}
      </div>
    </div>
  }

  renderStep = (step: StepData) => {
    let classes = ["step"];
    let onClick;
    if (step.number <= this.props.lastSelectableStep) {
      if (step.number === this.props.currentStep) {
        classes.push("selected");
      } else {
        classes.push("selectable");
        onClick = () => goToStep(step.number);
      }
    } else {
      classes.push("disabled");
    }
    return <li className={classes.join(" ")} key={step.number} onClick={onClick}>
      {step.name}
    </li>;
  }

  goToStepButton(text: string, step: number) {
    const canGoThere = Boolean(0 <= step && step <= this.props.lastSelectableStep);
    const className = canGoThere ? undefined : "disabled";
    return <button className={className} onClick={(e: any) => goToStep(step)}>
      {text}
    </button>
  }
}


const mapStateToProps = (state: ReduxState, ownProps: any) => {
  return {
    ...ownProps,
    lastSelectableStep: state.steps.completed,
    currentStep: state.steps.current,
    stepList: state.steps.list,
  };
};
export default connect(mapStateToProps)(StepDisplay);
