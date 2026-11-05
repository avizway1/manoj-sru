# DevOps demo: Code → Pipeline → Production

A tiny website with a GitHub Actions pipeline: **push → deploy to EC2**.
The pipeline does not run tests.

Live site: http://52.66.255.105

## How it deploys
1. GitHub Actions signs in to AWS with the role in `IAM_ROLE_ARN`.
2. It creates a throwaway SSH key and sends it to the instance with EC2 Instance Connect.
3. It copies everything in the repo, except dotfiles such as `.git` and `.github`, to `/var/www/html/`.

The workflow reads `EC2_IP`, `EC2_USER_NAME` and `IAM_ROLE_ARN` from the repo variables.
