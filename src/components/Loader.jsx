import { CircularProgress } from '@chakra-ui/react'

export default function Loader() {
  return (
    <>
        <CircularProgress isIndeterminate value={80} size='150px' color='orange' />
    </>
  )
}
