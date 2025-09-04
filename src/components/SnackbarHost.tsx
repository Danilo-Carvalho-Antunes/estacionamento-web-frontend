import { Alert, Snackbar } from '@mui/material'
import { useUIStore } from '../store/ui'

export function SnackbarHost() {
  const { snackbar, closeSnackbar } = useUIStore()
  return (
    <Snackbar open={snackbar.open} autoHideDuration={4000} onClose={closeSnackbar} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
      <Alert onClose={closeSnackbar} severity={snackbar.severity} variant="filled" sx={{ width: '100%' }}>
        {snackbar.message}
      </Alert>
    </Snackbar>
  )
}
