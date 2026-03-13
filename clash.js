//morelogin http://getip.yoxuba.com/get_ip 这个在大陆白名单中 需要代理



//dns防泄漏配置

dns:
    enable: true
ipv6: false
listen: 0.0.0.0:53
respect-host-rules: true
use-hosts: true
enhanced-mode: fake-ip
fake-ip-filter:
- '*.lan'
- localhost.ptlogin2.qq.com
- '*.msftconnecttest.com'
- '*.msftncsi.com'
- 'stun.*.*'
- '*.stun.*'
default-nameserver:
- 119.29.29.29
- 223.5.5.5
- 114.114.114.114
nameserver:
    - https://dns.cloudflare.com/dns-query
- https://dns.google/dns-query
nameserver-policy:
'geosite:cn':
- 119.29.29.29
- 223.5.5.5
- 114.114.114.114
'geosite:!cn':
- https://dns.cloudflare.com/dns-query
- https://dns.google/dns-query
fallback:
    - https://doh.dns.sb/dns-query
- https://dns.cloudflare.com/dns-query
- https://dns.google/dns-query
fallback-filter:
geoip: true
geoip-code: CN
geosite:
    - gfw
ipcidr:
    - 240.0.0.0/4
domain:
    - "+.google.com"
    - "+.facebook.com"
    - "+.youtube.com"
    - "+.x.com"
    - "+.openai.com"
    - "+.tiktok.com"
    - "+.icloud.com"
    - "+.apple.com"
    - "+.cloudflare.com"
    - "+.amazonaws.com"
    - "+.doubleclick.net"
    - "+.ghproxy.com"
default-nameserver-policy: false