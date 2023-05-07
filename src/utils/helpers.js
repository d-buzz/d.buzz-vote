import hive from '@hiveio/hive-js'

hive.api.setOptions({ url: 'https://api.hive.blog' })

export const voteWithKeychain = (
	username,
	setIsProposalVoted,
	setErrorMessage,
	) => {
	// Approve a proposal
	if (window.hive_keychain) {
		const keychain = window.hive_keychain
		keychain.requestUpdateProposalVote(username, JSON.stringify([263]), true, JSON.stringify([]), (response) => {
			const { success, message } = response
			if(success) {
				setIsProposalVoted(true)
			} else {
				setErrorMessage(message)
			}
		})
	} else {
		alert('You do not have hive keychain installed')
	}
}

// export const voteWithActiveKey = async (voter, activeKey) => {

// 	const operations = [
// 		"update_proposal_votes",
// 		{
// 			"voter": voter,
// 			"proposal_ids": [249],
// 			"approve": true
// 		}
// 	]

// 	const privateKey = hive.auth.toWif(voter, activeKey, "active")

// 	hive.broadcast.send({
// 		operations: [operations], 
// 		extensions: []
// 	}, [privateKey], (err, result) => {
// 		if (err) {
// 			console.error('Error voting for proposal:', err.message)
// 		} else {
// 			console.log('Successfully voted for proposal:', result)
// 		}
// 	})
// }