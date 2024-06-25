import React from 'react'
import { Text } from '@eth-optimism/ui-components/src/components/ui/text/text'
import {
  useRive,
  UseRiveParameters,
  Layout,
  Fit,
  Alignment,
} from '@rive-app/react-canvas'
import { Button } from '@eth-optimism/ui-components/src/components/ui/button/button'

type Props = {
  claimAmount: number | null
  claimNetwork: string | null
  closeDialog: () => void
}

const SuccessDialog: React.FC<Props> = ({
  claimAmount,
  claimNetwork,
  closeDialog,
}) => {
  const { RiveComponent } = useRive({
    src: '/sunny-animation.riv',
    stateMachines: ['State Machine 1'],
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
  } as UseRiveParameters)

  const title = claimAmount ? 'Claim successful' : 'Waiting for confirmation'
  const description = claimAmount
    ? `You have successfully claimed ${claimAmount} test ETH on ${claimNetwork}`
    : 'Please sign the transaction in your wallet'

  return (
    <>
      <div className="flex flex-col items-center w-full rounded-md overflow-hidden">
        <Text as="h2" className="text-xl font-semibold">
          {title}
        </Text>
        <Text as="p" className="text-secondary-foreground text-center">
          {description}
        </Text>
        <RiveComponent className="h-96 w-full" />
        <Button variant="secondary" className="w-full" onClick={closeDialog}>
          Close
        </Button>
      </div>
    </>
  )
}

export { SuccessDialog }