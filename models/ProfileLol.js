class AccountId {
    constructor(id, accountId, puuid, name, profileIconId, revisionDate, summonerLevel) {
        this.id = id;
        this.accountId = accountId,
        this.puuid = puuid,
        this.name = name,
        this.profileIconId = profileIconId,
        this.revisionDate = revisionDate,
        this.summonerLevel = summonerLevel
    }

    static from(json){
        return Object.assign(new AccountId(), json);
    }
}
