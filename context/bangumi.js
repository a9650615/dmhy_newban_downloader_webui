import React, { useState } from 'react'
import { createContainer } from 'unstated-next'
import axios from 'axios'
import _ from 'lodash'
import WebSocket from '../lib/websocket'

function useBangumi() {
	const [bangumi, setBangumi] = useState({
		list: [],
	})

	const getBangumiList = async () => {
		try {
			const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/NewBanDB.json`)
			if (data) {
				setBangumi({
					list: data.newBanList
				})
			}
		} catch (e) {}
	}

	const removeBangumiFromTrackList = (nameInJpn) => {
		WebSocket.emit('deleteBangumi', { nameInJpn }, (data) => {
			if (data.status === 1) {
				const newBanList = bangumi.list
				_.remove(newBanList, {
					nameInJpn
				})
				setBangumi({
					list: newBanList
				})
			}
		})
	}

	return {
		list: bangumi.list,
		getBangumiList,
		removeBangumiFromTrackList,
	}
}

export default createContainer(useBangumi)
