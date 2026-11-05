# DevOps demo: Code → Pipeline → Production

A tiny website with a unit test and a GitHub Actions pipeline:
**push → test → deploy to EC2**. Deploy runs only if tests pass.

Live site: http://52.66.255.105

## How it deploys
1. GitHub Actions signs in to AWS with the role in `IAM_ROLE_ARN`.
2. It creates a throwaway SSH key and sends it to the instance with EC2 Instance Connect.
3. It copies `index.html` and `app.js` to `/var/www/html/`.

The workflow reads `EC2_IP`, `EC2_USER_NAME` and `IAM_ROLE_ARN` from the repo variables.

## Live demo script
| Step | Do this | Audience sees |
|---|---|---|
| 1 | Change the `<h1>` in `index.html`, then commit and `git push` | |
| 2 | Open **Actions** | `test` ✅ → `deploy` ✅ |
| 3 | Refresh the site | New headline is live 🎉 |
| 4 | In `app.js`, change the greeting to `return "";`, then commit and `git push` | |
| 5 | Open **Actions** | `test` ❌, `deploy` **skipped** |
| 6 | Refresh the site | Still the old, working version 🛡️ |
| 7 | `git revert HEAD`, then `git push` | Back to green ✅ |

## Run tests locally
```bash
node --test
```
