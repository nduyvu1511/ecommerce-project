import { ReactNode, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import NotificationsSystem, { atalhoTheme, dismissNotification, setUpNotifications } from "reapop"
import { RootState } from "../core"

const App = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch()
  const notifications = useSelector((state: RootState) => state.notifications)
  useEffect(() => {
    setUpNotifications({
      defaultProps: {
        position: "top-center",
        dismissible: true,
        dismissAfter: 3000,
        status: "success",
      },
    })
  }, [])

  return (
    <>
      <NotificationsSystem
        notifications={notifications}
        dismissNotification={(id) => dispatch(dismissNotification(id))}
        theme={atalhoTheme}
      />
      {children}
    </>
  )
}

export { App }
