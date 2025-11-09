---
id: ssh_remote_host_key_change
title: SSH Host Key Change
sidebar_label: SSH Host Key Change
---

## REMOTE HOST IDENTIFICATION HAS CHANGED Error

I entered the scp command to send a file `sudo scp ~/.ollama/models/.../library/qwen3/4b appuser@192.168.1.230:/home/.../library/qwen3/4b`

It suddenly shown

```bash
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that a host key has just been changed.
The fingerprint for the ECDSA key sent by the remote host is
SHA256:8Yyfsdlptz1asdf0MGhEJfIVsSHpNTmStXVhs.
Please contact your system administrator.
Add correct host key in /root/.ssh/known_hosts to get rid of this message.
Offending ECDSA key in /root/.ssh/known_hosts:3
  remove with:
  ssh-keygen -f "/root/.ssh/known_hosts" -R "192.168.1.230"
ECDSA host key for 192.168.1.230 has changed and you have requested strict checking.
Host key verification failed.
lost connection
```
To solve this issue, the error itself has given the command to fix this.

Copy and Paste `sudo ssh-keygen -f "/root/.ssh/known_hosts" -R "192.168.1.230"`

Output:

```bash 
# Host 192.168.1.230 found: line 3
/root/.ssh/known_hosts updated.
Original contents retained as /root/.ssh/known_hosts.old
```

Now try again:

Enter `sudo scp ~/.ollama/models/.../library/qwen3/4b appuser@192.168.1.230:/home/.../library/qwen3/4b`

```bash
The authenticity of host '192.168.1.230 (192.168.1.230)' can't be established.
ECDSA key fingerprint is SHA256:8Yshp3Cptz10MGhEspYEhlVz2ApSHpNTmQEvCStXVhs.
Are you sure you want to continue connecting (yes/no/[fingerprint])? `yes` # <--- `you need to type yes here`
Warning: Permanently added '192.168.1.230' (ECDSA) to the list of known hosts.
appuser@192.168.1.230's password:  <--- `Enter password here`
4b                                                                             100%  859     1.7MB/s   00:00
```