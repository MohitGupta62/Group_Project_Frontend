import React from 'react'
import { useState } from "react";
import Clothcard from './Clothcard';


const Cards = () => {
  const [clothes] = useState([
    {
      id: 1,
      name: "T-shirt",
      category: "Shirts",
      description: "Comfortable cotton t-shirt",
      price: 20,
      clothImage: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTExIWFhUWFxcYFxcYFxUXGBgaFxcXGBgWFxUYHSggGBolHhUVITEiJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGy0lICUtLS0tLS0tLi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLf/AABEIAMABBgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAMEBgcCAQj/xABFEAACAQIDBAcEBwUGBwEBAAABAhEAAwQSIQUxQVEGEyJhcYGRMqGxwQcUI0JS0fAkU3Ki4RVigpKy8TM0Q2OTwtJzFv/EABoBAAIDAQEAAAAAAAAAAAAAAAMEAAECBQb/xAAyEQACAgEDAgUCBQIHAAAAAAAAAQIRAwQSITFBBRMiUWEUgTJCcZHhobEVIzNiwdHw/9oADAMBAAIRAxEAPwBgWqSYNG0KipCCpWHQTQOoXc0Vnbmxrdq2XQQapOCtg3SGrSemV4W7MndNVDYSq16VWQd9VJtI6PhcVLURCWAxXVEfh+VLpXsdWUYi0JBGsUS2ps1MoVdMxA+dEtnYJra9U8spEAk8IgACrxyuIXxxw+rbgqtL9zPdkYJ7txVtjtSCDyjjWudG+i9vDjMwzXDqzNqSTv1NReiHR1bDu8e0dO7uq3gVpnIs4AroLXQFMbVxq4ezcvN7NtGc9+UTHid1RIjkPkAamo9zGWxp1iD/ABL+dfPvSLpFfxlxrlxzE9lNcqgbgF+dRcKbl0qirnaZEkeZJbQDmTpzrVEPo4a7qba3rr6VlGA2sNnKRbYNcaCyAkKmsEFeGijQ6iT7PHR9h7dtYq2GtkZo7SSMy+I5d9ZqiwkRXgWnQK8AqUVY3lrzLTsV4VqUQZNoUuqFOZKS2NdDWjIb2BhQFJ5miwsjlTeCtZEA5CpFaMnnVivQor0UqhBV4a9pGqLMU+kEftt3wT/SKq4Yc6tH0jL+2XO9V/01W7t0tlJHaEyZ4QAqqsQoAHvNFREK3cKkEEgjcRvFG+hR/bbE/j+RoCaN9DT+24f/APQfOqZaN3pUqVDKFSpTXlWQx5MOTTuHt60tl4Z7jhRx9BU67hDbuFWiRy3a0KjRUPpMH7L51VehqEGc3dFW/wCkxZwwH94VTdkbKcKt1DqD+hWZ/ho7Hg8Jeb5iVpdS+YjDmUneSKsa4TQaVUtl7RN27bBEQdZq+4nEKi6kVWNNR5FvFc0cmouPsiPgcVlJU0Vs3A241R9o4wi6HDaV1tHH3bai9ZMxvX4iiLk56L4FqmfS9dK7OYAxmuW1PeJzR/LXewuntm6AHOVuIOlSumwtYnA3BIKqbdw7vZS4rP8Ayhqu6RpR9SPnp5qxHpAlpQuDsi0WClnJZmDQQQCx1jgdxkmBMAj0n2Ep+0tJlIYIQAAGkCGAHjv/ACops/oxh7SqzrLACSZOvcBQvqIpWM/Sy3NFJtod7Kx7+NWPoXiXw+IV7aG4H0KgANB7+G7wq54PDYK59nmWfwkQfRoqx4HYFm4LXVZYVySwOpb2csjdG/xisxzObqi8mFQV2Gk3Cd8V7FO4vC9QoLuMv4iY9SahWcfab2bqN4Mp+Bo4oPxXJFOA1ywqFDeWpezLGa4O7WouWiuxEiTW0ZYcApUy98CvRdqEHqVRxdNd5qhB6a4L8qZzzSK8zUIZF9JB/bW/gT51U6snT8RjH1+6vwqszRC0esam7DxBTEWWG8XF+NQGNd4ViHUrvBBHkao0kfQtvFkgGK8e+ecVWdm7RxF1VC2401JOnpxqwYTBmJcmf1urO0qSo9N0cTSp17arvpVW0zuRmeFx9y2sW9DPtcfTdTdu4z3CbjElo7RnTnAHHd3U7aUGpuHt61mi7Kn9JBjBrPMVVdg7ZVbeQa1e/pBwwfDwedZvh8CqmRQ5pNHS8O1stLO6tPqWOxje2CogjdTmJ2lcuntMfChuGZU7THhoKk4EhpLDKOB7LNP8JYVrFjk0Z8X1Wly51LA1yueUqfy3SsI4C4kHOZPCZNKzeuCYH2R+8SAPKfaPcJNCr+0CjSl1hA3G2g854eNCr+3Lt+6O2xAILE8QDz4DkPdwEfD4E4Y3Vy/a1/VqyzbW6N2UdX60icpZMu/NrAadJgiY3+6BDLmRLkq4KkKxKwwIKjNqQBxo50kxi38Cty0xW7Zy5hEHISAxHAgGDPDWq/grjG0Lx9ktkEtxjgOA0NCWVqDvqMSxKU47OncKtfnIDwiPKj+zhauKRcjKRrNVZkZhmHAzUrZyrdLW5IJ7Q5yOQ47qU28D+7kPYXZeFW59nr2sridYYR4jQ6GrdexFnC2JBy27KaQdwUaAczwrNMenVkSCt0zB3CFyyRx+8uvjQXbe1bptdWzkhjJB7vjr8KaxLarE9TUpKC7DfSXpdiMY+a4xyj2E+6oO7Ti3M0xsRL9+7lsKTl3twB72O7woPY7TDvPwBNahsDGCwqp1YJiQuYKY4kSNavJPaVjx7jizisTs4W3up+z5kVwpdmQtOa4SdAs5QFHM8tdADAgEag6g8wdxoI+1bGJwrLcRwl4NbIjMRI1Oh4b5pdCMQz4GzmMsoKE8zbYpPhpWsU9zoFnx7VYbo5gbqqgoNaWTApbWsXBbOQGYphITbOOkfSW3aKiZ11jgBxqds/pBZdQQwrKcJgccbhN3DudTrIPzqw2dg3mhgMvMGe7lvozSqgK3dTRFxqtu8a5vYwAR+v0dfShGEsOixrv56+Pjw5HSuMSH5H5eQoK5DP4DQbsTNDsJtI3A28ESPSon1i7lgIa52JhXglhE1J8IpdTNelbk4q5O/T4UGmjPTJSuKuA91B7dlmEgE1adLkNGLlwkehCdwmpGABW7bkfeX4ipeAUBd2tTUw2YpOhzKfeKDLMlKn0OhDRSlDdF89TXMLbAURyqSJio+F9geFS0OlGk6RyoR3OmR3tzvr2n5ryh+YF8n5Kve6PAezpQ5bZVoI3VcikVDxmFlWyQHIOUkSA0aSOU0RxsFdFD6aJmtBREk/o1SbuHW2Obc/yFGcXfcsc8lpgzvkcP6VAxNuBmbf8AD+tCyVi5Yvp/N10tmPiPf+f+gQyQdd/Ll/WomO2gFEDhU4WQ0zI0mflT2DwdlSWK5guUSwlQxBO7jEDWj4MyhjeST5fb4N6zTRWRafGvTHq/dvv88ftyV7DKbjAXM6KdZhfgTJFH/wCz8vVBAcj8TGZiPAaeFd4xUuamEgHWdfEDhU2ztnD5EtksSsQyqTEcaUyZJTdsPCCgqiS2xoskOAIXXuI4yOREihu32GLZLOBACqSSEEAu3CdwAG89/dUTbd4XHYqT1cyBz5nXcJk0V+ip1F+Rxd0YcpAK/Ae+sQgm02GWRxi4ruWu30RK2lAuSwUZpGhaNYI4T3VEw3Qpi2Z7kNwKbx4E/lWhraFeNbFH8iN9C/PnVWYLt3HYmxiyrvmFuUWQNVYgkHxAQ+VA9pYzrbhYCABAA3frfVw+kXC/td6PaJQgR/21kk8BpVLspx7/AIf7n0rMklwSDcnbHdnW5Pmfga1bY+LtG2FvW0eD2Q4U6jlO7hWYbMSFniAT5x/WrvsO9bvr1VzRpzKeIaIMHvj40tldsew8Kix7PezdDLesuiB1KlSUCs3ZIDI2oI0I4xXf0fFBhmtWzK27txV4yuY5D5iq/wBO8R9UwgUFWvXMyqVCrlQRnuEL7TCVAJmCZ5179Em0lW5lPsXAP8LDeDy19xrWO4tN9DGoqaaXU1jZuEjU0Ryiktcu0U8cwRtDlXnVCvUaa7qEOOrHKl1Y5V6zUlaahDzqhypFAK7pu41Qhi30hf8AOP8Awr86WAZcg3U/07wN65inZLTMMo1AJGk0Nwmyr6kQlwqdPZIkgAmF5axPcaHnx7kdHw3UrDPnuR8fiSlzs+lGMCWYoSI7S6eYqE2yrvWAmy8fwmitjCXcwi22hHA86XyRdKkdTTZIOWSUpKn2s1nCr2R4U7lprB+wPCnGanDzb6nuWlSVppVCWMLcBE1DuYkA76ZtYsc6AdLxcVAV9htGM69wPIH9d+JZEk2jWLE5zUXxZXekBttiLly3uYz3THaI7idfOqrta5wG87vmaOYi08E5TpA823ADjNRts5bKsHQsIKoSxkyys24DKpyjwMjWTSLk5yuR2Hjhp8DjiVfz3K09w6nfGvkNAPWK6toQYB4CTzPE+pNdG3v5GNJ3AGQJpu5dC6k9wjeTwA76Kcgcu21GrGf1yqJsW9118iAFEqB8yedRcZizmUbjMkcY3AH+aneiZi7P978quuCgpjrcGKb6HYnqMfbH3brKP8SnMp/1DzqVtlO0aA3LuV7b8UuI2m/ssD8quPQh9KRTdyucNdJHhoT4cfSK6umnUYMc+lZIxIPNFPpmHyFU8WSFAjWPe3+7VdvpHvJcxYEiEQBjw9omPh76rmBw/W3FBIUMwUE6akwPypPNNJsdww4PMLY7JA3wDHGAd/hpVy2HsMPFzhpPyqE2wxhMVavO32ZkOeA00gcR3cavexBZCwsrmGgOmkmIn5660jKW7oMQmkUjpL0d6/GtbQQ5sB7Zk5SASr2yOE6EEcTrVb2T0d2lhbqkILbE6BnXKwG/mCa07GXkt4jMAS6BbamJ1dhIOo00XjRTaGEe/ae3dCFtCrW5Bn7rBW3f5q3vaW0FJ+qyXsXbbquS/GZdGK6xynn5bu/fRlsasxVCsdZnJYQzWjm/jtBlaPHMrUUt41SOrziYG46lCoiDx1kUbT6ht7ZfuBy4b9UUWG1tdNdDHA8D31JG0U51RsJiDcxoQHshIjhJMn4Crc2yQd1NvJG38C8oOKXySLm0E517a2gnOo7bOG41BxeFyCeFWskfcw1Qb+vpzFN3McnOg+Bsi5uqXd2bArfBVkpb1o74rwdQNQq0Hd1BiulKkTVblfU3slXQMFrZ4Clbu2u6h1m3I0pxtnkCTWgdoJjGIOIpq5jVnfQ1MHOgp07KaqRdk+3jU50qirswj2YB4z+RpVCWe/2SlPXMErKUYSpEEHiP18K8+uD9aVwmOU8RQ0orobbbdmfdKMKbDi20nSUbcMobRSIIYCN3Dv0qlbUvFnZjqTv751NXHphtTr7xYHsKMqfNvM+4Cqbi07JNC0WNZdT8KzpeK5pafw9XxKTS/wCf7IFNcJHZ0jTnULEXXHluPGjeBw0W5O9iT5bh8KhY9BXXejxpXR5SOvySntsCJdLNLe1/Q0U6M6PPfQoCHFWPors248MBCZiCxIAEanTeYBG7mOdczNDa6R18Ut0bDe1MMXYKo1bd/vwFC7wTC5jcUnEK3ZRgcoiRJOk6if8ALB9oGz7VxK20i2ASRDOQDO/cN3HwjTvND2sxJJYyTvJoEeAh9BbCYmyrNvbtHz/QrnbWL6q07/hVj6ClsO4DYTuVfgKHdN3jCXe8R6mneispK2YvjbjXn1JJZzPkJq1bO2UpwrIVhnXrLbcwpgjuKnKfPuoLhbKK4m4Fd2C6DNl3c9J79d3dV32LhMy3MPue0wu22J3hpkHxBKnxnfXHzSs6XRHOxLtjGWhmCrfHZuzpmI0zDvMTNHtl4AKvVtrl3HcwG/Qj4VnN60bOJddVnXkddR51aNnbVZRJbcBqT6HWhPgHR3tj6zbiQl2yzqwYALdUgiMx0Rx2QB7J0FWC3tMMltwd4O+Rp36acKY2NtG1eSCdzd3kaCYq5lvOLLdlQfCTqY7pj0Nb4u0XjjudMcx+0XuXAzPcVdVUq9sJJ0WSsn1qCMymDGcklH3Qx1ykjgd4/Uv7Iwl3FJ9tbGVvvDsE8h36xrw9aH2L4Di2TqVWAe7TTzFb3Lt1G0o3ReOh2F624LzLluqIuDxBg6aTPrvq8BarPQPali9YcWmBNq41tzxLCDmPcQRHhVge+BTuLF6bZy9Rkub+DtrQND8eF1Ug+7jUo4sc6iX8rNmzR5UbYugs6OtmbPVACOOtTLuHzUzbxQAAncIr04wc6uqLfJEubCtnePfXdrY6LuFP/Xl50jjl51nZG7o1vlVWdWtnqKkmwCIpjD7QQmCwp+7dHOtNmFFHgtKu6uXP68qYv4pV1JAHMwB6zQrFdK8MmmfORwQFveNPfVWl1NKLfQsVs6UqoeK6eR7Fof43A9wBilWd8fc2sU/YF4bbfW3FQwFJUMe6d3cKuWM2PauWmRG6tmWM4gkeR4Hce4mse6HOGd8x+7pNWTB3grGLh1/vH86VWZRuLVnRy6OUZXF9AFt3Zl7D3DbuTPAj2WHAqeIoPtK4AMo1qy7Tu9dfS2zsQc0azGm8TSsbLSWGdSV0/wCGg4TTWhzY8G50+f6C3i2lz65YlaVW6d8v9n7FetRcTMs6aEfhPKhG0LBq9vhLNlGuXEWI1y9mY8Kznau3rhaVsqltpNvMH1A0kNmE+VdT67FOPc85/hWowz6qv1/gj2cAzMO0BRXY7sB1ckKWkrwkTBjmJNV/+1n/AAr5ZvzqwbKJOUneQD6ia52plF1R1MEJRT3FoxqylVHaNurlc9nyqq7UQzAjfx5UnEMa50Xxc2bXfbQ/yimenMnDsfDTzqR0aw6tg8ORGbqbc+IQU50hw2bDsDwB+Bp78pSfJjLAM6t/3I9eHvq+9H9qlX7UFshAP4oEgeNUfB20uM9liwIcOCOUKInhBHvorh8EFcKjMqgZjqWPvmuVmXNDsXasJ9NL9u8ov21YPbgFo7DBvuTvkcDEaxPIbYxGZQFBJY9nj5DlRnY+LLdYHbNlAChwhLTMlso4CN5O+ibWgUyoHkDNOaFJEn2DpO/UAeNCtJUy/wBAVsnBlAVZvaOsbuEAURdJcwrNodVEjXdMUPu4sKpYmFI4+kSONXPoYoVIVswyIM0yTHM8d5q4LfKgqltiCsNjuqsJmDSMy+yZ3Fhw7qpu0MNd6x/srjkBTpbdtSgJAyjgSRpyrZ3rgCmlp0u5UZUgD0P2UMHYKW0yktnYkmXJAkGdSIjwgcjJjH3BcUG3cPA7tCD38DFOO3CuAlMRuMaAyhGb6D2DRXOU8t87/wAqlnY6HWW8JNQLVok5QxWZGYRI00OtV28MWLj2lxbSh1hQdDuOo8PWiKb9m/sL5cKT4pL9S5W9j2wd7epoV0qw6WbDurFSo0MnfwEcar9nahQdrE3Xj+ET4mKjYrpQunaXTiTmNVvQPY0yC1zG3EBtq2vEjKPVop21hsWV+1xCJ/DLt7oE+dEXt3X33N/AU3tLZJt2i5aTGkiR76WjOL6Oxmdp8qhnB27at/xbl5pAyu2VSDv7NpWPvHPhXeJ29cUFUKoOBARTBj8WY5huJH9aZGFCvBlgbatBJA7QE7o76sVjCW1Ts20HZnQfOjxVuhdzS5oqIW5fMhLl088j3P57nZHpUtdgYlozW1WT/wBS5O4fht6cKfbab2yIO8sNZOgI/M01itqM7IS36lhVTUIyrqWsuSUfTSOTslU9vEAd1u2oHqZmlUDGYmWyxrJPDgY+de1Iyg10OZPF4luf+bFfYj9HNiZblwHSN1SLiKtyOPlR23IuuRERVXxmJDXoHCkvLbdnrJZ9yla7Hi2z9atmNBm+FCsdjGGJdVO9vlVkwNwZogT2vhVKxwc4lyvB/kKYgr3GHkknhaXKsO9MsNfuYZVtgmd4HKs6xWGuJbK3LcNKwzTmVVnsLwAJJNbZgXItqTrprPhWcfSZiA14AcuFEx39jn53Fv5KVGlXLZywVHID3AVUESSBzMetXLDaP3TUy9gK6FkI7PkKCbStSfOjjHs+VB9pW8wifTuoMSjTejWDP1PDkHfaSe7sipuLtE22U8tK96O2SMLhxMfZWv8AQtO4oaHjT8ehgwbpNbfDYhzyZWgGJ10k8t9Euj22BeDcHK5WHLvHca5+k1PtyYiUT3MapmBuFLiMGCkHedw8e6lsuNSTQaE6Zo+z1PWNBhozDy0Px91HcHtQgjPwmT/SqpgdrWw4u51ygEN2hOo3DzihG3+lDXezbBReLfe8vw0jHBOcqoYeSMVYR25tBGuHsZu0dFPEnTQmJjeRxq6fRcx6xyG7BRgFJ1BVk15caxdHI9liIB3GOXKtX+h++cqyd/Wj3g/KmJ4vKca96JhyeY3+hqrGms86CvGM10tHN02eqIr2K8mvasnQ7taEHvqt7WudXj2PBwoPmoHxAqxiqz0zH26Nztj3M39KZ0v46FNWrgVzpPs5kfMSCHLlADrpBgjzoJsbZzXbvUyAx/EYGgJ30c6X4Rr3UXUkllKGOYOnqS3pQ/DbEIhgZYFVZSyntGSTP3hABEd/Kl8mGUW1fuBjmVKw/s21cBXtEgwRrI0kaelWTHAFILKIAMMJBjhQro/gSBJ3GI8v96m7XQ+g+dBjCSte4SWeLpjGVGAOufIoERliB5zRm1b+zH8Jn9eVA9myAoIO6PcKstpOyPA0aKqQHcpIrb4NSVJiCW4ju4eVCNo4NVcCefl7TflVju4YA+dCdp2QxUkyS5n/ACsaHkg/MbC480dqVAjaHavcyAwgKB97+6Nd2+lUXbOBm4+/2z869q1jkXLJBu2XcbOCuSDoeFCMV0bXMbg31ajbAJk1xfyQdeFaUIlvNOnyU+zs9VGYmG1qn2bBa7cgGOsMnyrQMY1srE9oTFBOjeHZreIhdc7Qawo/jSHsOq8iWHJJXwwrgsOWVVFZb9JOzrlrE5mU5SNDwrW+j5IAzDWon0hYIXsJclRIEg0TFW1nPztvLZheyrea6g759P6xVpw/tVXeji/aMeIHzn/1qz7Mw7XHCqJYzA3TAmPdQsn4jX5Q8plPKmbWFUwX1aQVTT7QTqJ+6dDE+1wotYwttd7ZgQCpkAbyGAJMFgQu/SJ30G2viyc6gllfmSQsmWCiYIzbidYrMUYs0DB9IcGttbZxAQooUh0dYhQIkiOfGvW25gzoMXYY66BwToJOk1m7kgCSd/kORqMAC6HNqGPgR1bEkjugV15YFFdRCGqcnTQz9I2LtXLoNu4H7ImARGp4nf5VRnGtHttqM+n4V9dR8qBka0nJetocjK42OIAI3frfTq2829oHgWPkB8yKZZPPmOfeO+nDu03frlR0gTkhq6FGg11mToTy0kwK0z6J2hbXe90eoNZtedSo4EaAAb+JZm48BHdWifRk8W7J/wC8w9SB865+tdRi/wDch/R/j+zNcBrsGuCK6UVpDjHBXVciuhVmBTQDpjbJNggakMPQr+Zo+GHMDxPu8aFdJbymyjhpEkBlIkH2hHmuo86PgdZEL6n/AE2BSgayVSSVZLgBIzCCcwXdKxuI31E2g2IuOoa0VkggZYZhmEFgN5gcNK8w+IzOs8Rk4/e7zrMmaklb2dWNx8ylRMyQJiPjTGeD3bvg5G7tyFcNeez2D7B13DQ7t/lXuKx2sA7/AIjkeFT7mAzxJmmcZssAE8aXaJUkiLhMSSgaJ0ktEnUDUnx+NGMHjMy7qFWMHlRYJAKqDB3gxIPOjGCsAKaHtadhcXXoQL4zxAiDvnxoZj8GexzNzTl7DcPKjWKwx0gTrPOojYY5kEHW4N4j7lz50RJdyPd2K3jtm3CWIG9p9QaVXM4IEk17WvSYe8i28E0nMxNOfVlFPC7vmuM00C0dBp0ypdIbQS9bjiG+FVTZ3TD6rcuWyJDOY7p7uVW3pQpa/aA3w1UW/wBB8Tcus5CxmJG+gxmk5Jjeox7sWF+yf9zS+jt7rIbnrRnb1sGxcH90/Cq5sAG2qqTBAii+0bpZGE7wa1CXAplXqMP6CbMF/FXLTEqIbtATlIJAJHLWPOrUMJbwrMGckoxS52SC40MBc2nBlcHxiBNQ2NtlsDjLhIlSxzCBOhJUgkGN59aPPjziV648S2nIZiABxAGWi7E3yDt0SsRtZXGtwAbyD2ZP4mA0Ld9MM0wQQR3HQjxobcsBhv0/U/OusPglXUE/ruokdNbtMBkzKK5Ct1gVkGgW0BrG4sN5PA7xPIwB50/tHGPbGkFY490/0odYxrsO0RuBgbhXQlJPgQxxa9RAewRmkzPHwnd3UOA1NG8W0CaCKdfM0rKKUrHcc24jymuGauppq7Wm+CkuRtq0ToIcuFRuV1j6EGs4mtS+j3Bm5gtP3twf6a5PibrDfyjo6J1k+xpD7XX7qk+cUw22H4KB6mhOHt3FUKVJjSRB04V1mfhbbzKj50r9bCrs6qhEnPtK6fvR4AV4GZhLu3ONTI5gTuGs/qIP2v7sf5v6VIRr+WIA3a67hu3ce/lpWfrsXdkca6Dt64FECDroNfGZEag7iNYJmo2KvlrLAmSLit/Kyn/1rjF22RMzcwNOFD3uzXU0CeZLLHpZzdbqMcIvE7to5K1aNmr1sOeIBPiN/vBqqk1Yeh1720J3Qw89D8vWupnVwOLjfqLWEIpraEZeO7jUrPpFRsdBEc6542+gPsEFVE8Fomix6UHT2ZHcPTxovaXQeFW0VEcVxNR8VGa3/GP9D04LWtQ8cSCn8Y+D1ERhPu76VQFvGd9Krom4gHEjWKhXsQ4OlBsR0ywo9m4p9fyobd6VW2/6yj1/KlVGT6jssi5osq5ZzuRIqDiuk9sZgupFU/aW2rbNpckeJoZhcYgkZgJO81lYuWwrmqirLvs/aBuvrpRfCsWjKeMGSTMnfHKIqv8AR7E4K3DXcXbnlr+VWy30s2cBAxVr3/lW4xa7AMjTfUyDpF0fuNtPqiQDclh5VNOCNgNaaJRo79Rm0/zVZ2/s04362capeeJaI5bqh9Pdq4S41tsO6OTmzkDkBl3xzNGx3uVgp8RdFcA0qXlzLrwH+1DfrKZQM1S1xluPbHvp7HJciGeLdUDNu3YRR+JvcAD+VQsLame751P2oLb25DSwcADuKtJ8iF9ag4bsmD4TwqpNbiRi9vQliyr9gkhiAE1VVBnUuzD2QJMcarca+dHLjTQq9h2nRfhWJPkNBcDdeMadNhvwn3V4cO/4T7qqy6IbVrf0UYoDBMCN15/ets/Os7wmylezfZnCXU6s2lP/AFAS/WKO8DKR6caj4a5ibYy23uoCZIV2UTumAd+g9KS1en8+GwZxT2OzeX2mg+6fUVwNrL+A+v8ASsMOKxn729/5X/8Aqm2v4v8AeXv/ACN/9VzP8IfuMfVG8f2sP3f839K9G2R+7/m/pWQWbpKoWuvJUZgXfQjQzr3T5inVuCdbh/zNRV4On+Zf++5l6tmnbY2rnt5cgEsNZ5UH62gWz8Vb3dao73YgfmfIVMGNsZu1iFI/uz8SPlXZ0uOGkxbLvuc7NvzT3UTnv0U6L3mN4Mqsy6hiASonmw0GsVzszauy1Elrebm+Zj5ZgY8qLp0swQgfWrcaSBm/Ktz1NqkjcNKktzkWJrpJ03VExF1pGvGKGN0uwBH/ADKT5/lXF/pVgDuxNvd37/SlaZsI217K95mp5cwYIG/nHhVXTpZg4E4lPf8AlT17pXggI+tWz4ZvyrG2VmlQXv4m4s+PLxqPicYxyydzf+poNd6VYPX9oQ+vPwqPe6S4Qhf2hN8nfpp4VGpFqiyXcUyxu1E6HnSqtXekeEgRiF9/5Uqx6/k1tgZTVn2d0QZrdu7duqlu7avXFIF05ers3ril3FopE2TmVSXAO4E6Vii+H6R37dk2LYtIhVlfLaRWuBrb2puOBLkLceDv1nWmwZLxHQ+8jKDdsw6XrocM5Xq7Nq1dZ/YmCl5CBE75iiu0OgID9XYxSO/1jEWspF2QthEdpC2tbgBMhZmVCyZoI/SvFG2bRKEG2bQJtpnRGtJZdUeJXMltAfCdDXY6YYvNnJtEly5mza1Z7fVXCez/ANRIDDjAO/WpyQl//wAHiRc6prlpXJfIp64s627SXndEW2W0W6nZIzEmMulK50N+ztsMVZDH6wbufrVVEw7hC4BtZt5AIImWXTQkDLnSK6zqzpYcI1xlRrFs2wbvVhotxA/4SQd4jfqa52h0hv4gqbxS5lum6M9q2YLRmTdrbMCU3GBU5IT9h9FTdbDdddS0uIuBVtkst9k6wW2dAyFZBMgEyQCYIoVtXZjYdjbuOnWjLntrmJQsCxVmjLmXQEAmCY4GCbdNMYWV2NpnVw6ObNoukMr5EbLKpmRTA5UH2hj7l8q1w5mVFTNHaYIIUu332AgZjrAE7qhCLSpUqsgqVKlUIKlSpVCCpUqVQgqVKlUIKlSpVCCpUqVQgqVKlUIKlSpVCCp/CW0Zoe5kWDrlLa8BApilUIT7mEsjdfDar9xhvIDGDvjU9/rTVyxbBYC7IG4xE6Exr3gCe+ubeJAWOrQ95DTx5Hv91dfXB+6t/wCU/nUIOfVbP7/+RuY+Rb0pm/ZQCQ+Y6aR4zr5D1r04oER1dvcRMGdQRO/frPkK4vX8wjIi6zIBB+O6oQZpUqVQh//Z", // Sample image
    },
    {
      id: 2,
      name: "Jeans",
      category: "Pants",
      description: "Classic denim jeans",
      price: 50,
      clothImage: "data:image/jpeg;base64,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", // Sample image
    },
    // Add more static items if needed
  ]);
  return (
    <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold text-center mb-6">Available Clothes</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {clothes.map((cloth) => (
        <Clothcard key={cloth.id} cloth={cloth} />
      ))}
    </div>
  </div>
  

  )
}

export default Cards