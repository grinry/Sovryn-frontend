import { Asset } from 'types/asset';

import docIcon from 'assets/images/tokens/doc.svg';
import usdtIcon from 'assets/images/tokens/usdt.svg';
import rbtcIcon from 'assets/images/tokens/rbtc.png';
import bproIcon from 'assets/images/tokens/bpro.svg';

import { AssetDetails } from '../models/asset-details';

export class AssetsDictionary {
  public static assets: Map<Asset, AssetDetails> = new Map<Asset, AssetDetails>(
    [
      [
        Asset.BTC,
        new AssetDetails(Asset.BTC, Asset.DOC, 'BTC', 'Bitcoin', 18, rbtcIcon),
      ],
      [
        Asset.DOC,
        new AssetDetails(
          Asset.DOC,
          Asset.BTC,
          'DoC',
          'Dollar on Chain',
          18,
          docIcon,
        ),
      ],
      [
        Asset.USDT,
        new AssetDetails(Asset.USDT, Asset.BTC, 'USDT', 'USDT', 18, usdtIcon),
      ],
      [
        Asset.BPRO,
        new AssetDetails(Asset.BPRO, Asset.BTC, 'BPRO', 'BitPro', 18, bproIcon),
      ],
    ],
  );

  public static get(asset: Asset): AssetDetails {
    return this.assets.get(asset) as AssetDetails;
  }

  public static getByLoanContractAddress(address: string): AssetDetails {
    return this.list().find(
      item =>
        item.lendingContract.address.toLowerCase() === address.toLowerCase(),
    ) as AssetDetails;
  }

  public static getByTokenContractAddress(address: string): AssetDetails {
    return this.list().find(
      item =>
        item.tokenContract.address.toLowerCase() === address.toLowerCase(),
    ) as AssetDetails;
  }

  public static list(): Array<AssetDetails> {
    return Array.from(this.assets.values());
  }

  public static assetList(): Array<Asset> {
    return Array.from(this.assets.keys());
  }

  public static find(assets: Array<Asset>): Array<AssetDetails> {
    return assets.map(asset => this.get(asset));
  }
}