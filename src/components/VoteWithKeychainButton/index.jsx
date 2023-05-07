import React from 'react'
import KeychainButton from '../../assets/keychain-button.svg'
import { voteWithKeychain } from '../../utils/helpers'

const VoteWithKeychainButton = ({ styles, username, setErrorMessage, setIsProposalVoted }) => {


	const handleVoteWithKeychain = () => {
		if(username) {
			voteWithKeychain(username.toLowerCase(), setIsProposalVoted, setErrorMessage)
		} else {
			setErrorMessage('Please enter your username')
		}
	}

	return (
		<div className='mt-2 mb-2 cursor-pointer' onClick={handleVoteWithKeychain}>
			<img src={KeychainButton} alt="keychain button" className={`${styles} pointer-events-none`} />
		</div>
	)
}

export default VoteWithKeychainButton