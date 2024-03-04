FROM quay.io/levanter/md:beta
RUN git clone https://github.com/Giftedmaurice/levanter-bot.git /root/Giftedmaurice/
WORKDIR /root/Giftedmaurice/
RUN yarn install --network-concurrency 1
CMD ["npm", "start"]