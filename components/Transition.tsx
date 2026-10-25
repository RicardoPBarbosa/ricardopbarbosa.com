import { ReactElement, ReactNode, RefObject } from 'react'
import { CSSTransition } from 'react-transition-group'

type TransitionProps = {
  show: boolean
  nodeRef: RefObject<HTMLDivElement | null>
  enter: string
  enterFrom: string
  enterTo: string
  leave: string
  leaveFrom: string
  leaveTo: string
  appear?: boolean
  children: ReactNode
}

const splitClasses = (classes: string) => classes.split(' ').filter(Boolean)

const Transition = ({
  show,
  nodeRef,
  enter,
  enterFrom,
  enterTo,
  leave,
  leaveFrom,
  leaveTo,
  appear,
  children
}: TransitionProps): ReactElement => {
  const addClasses = (classes: string[]) => {
    nodeRef.current?.classList.add(...classes)
  }

  const removeClasses = (classes: string[]) => {
    nodeRef.current?.classList.remove(...classes)
  }

  const enterClasses = splitClasses(enter)
  const enterFromClasses = splitClasses(enterFrom)
  const enterToClasses = splitClasses(enterTo)
  const leaveClasses = splitClasses(leave)
  const leaveFromClasses = splitClasses(leaveFrom)
  const leaveToClasses = splitClasses(leaveTo)

  return (
    <CSSTransition
      nodeRef={nodeRef}
      appear={appear}
      unmountOnExit
      in={show}
      timeout={{ enter: 100, exit: 75 }}
      onEnter={() => addClasses([...enterClasses, ...enterFromClasses])}
      onEntering={() => {
        removeClasses(enterFromClasses)
        addClasses(enterToClasses)
      }}
      onEntered={() => removeClasses([...enterToClasses, ...enterClasses])}
      onExit={() => addClasses([...leaveClasses, ...leaveFromClasses])}
      onExiting={() => {
        removeClasses(leaveFromClasses)
        addClasses(leaveToClasses)
      }}
      onExited={() => removeClasses([...leaveToClasses, ...leaveClasses])}
    >
      {children}
    </CSSTransition>
  )
}

export default Transition
