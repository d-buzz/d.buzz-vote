import React from 'react'
import HiveSignerButton from '../../assets/hive-signer-button.svg'

const VoteWithHiveSignerButton = ({ styles }) => {


	const handleVoteWithHiveSigner = () => [
		window.open('https://hivesigner.com/sign/update_proposal_votes?proposal_ids=[263]&approve=true')
	]

	return (
		<div className='mt-2 mb-2 cursor-pointer' onClick={handleVoteWithHiveSigner}>
			<img src={HiveSignerButton} alt="keychain button" className={`${styles} pointer-events-none`} />
		</div>
	)
}

export default VoteWithHiveSignerButton