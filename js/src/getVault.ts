import { EventBridgeEvent, Handler } from 'aws-lambda';
import { VaultItem } from './types';
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import fs from 'fs';

const getVault = async (): Promise<VaultItem[]> => {
	const res = await fetch('https://edition.cnn.com/specials/business/vault-by-cnn');
	const html = await res.text();
	const $ = cheerio.load(html);
	const articlesRaw = $('article');
	const vault = articlesRaw.toArray().map((article) => {
		const title = $(article).find('.cd__headline-text').html() || '';
		const imageUrl = $(article).find('.media img').attr('data-src-mini') || '';
		const linkUrl = 'https://cnn.com' + $(article).find('.media a').attr('href');
		return { imageUrl, linkUrl, title };
	});
	return vault;
};

export default getVault;
